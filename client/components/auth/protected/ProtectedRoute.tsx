"use client";
import { api } from "@/app/api";
import { useState, useEffect } from "react";
import { Box, Center, Spinner } from "@chakra-ui/react";

import Cookies from "js-cookie";

// import type for children
import { ReactNode } from "react";

function ProtectedRoute({ children }: { children: ReactNode }) {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    });

    const refreshToken = async () => {
        const refresh = Cookies.get("refresh");

        if (!refresh) {
            setIsAuthorized(false);
            return;
        }
        try {
            const res = await api.post("/accounts/refresh/", {
                refresh: refresh,
            });
            if (res.status === 200) {
                setIsAuthorized(true);
            } else {
                console.log("Error refreshing token");
                setIsAuthorized(false);
            }
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        const token = Cookies.get("access");

        if (!token) {
            const refresh = Cookies.get("refresh");
            if (refresh) {
                await refreshToken();
                return;
            } else {
                setIsAuthorized(false);
                return;
            }
        }
        setIsAuthorized(true);
    };

    if (isAuthorized === null) {
        return (
            <>
                <Center height={"100vh"}>
                    <Box>
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="blue.500"
                            size="xl"
                        />
                    </Box>
                </Center>
            </>
        );
    }
    return children;
}

export default ProtectedRoute;
