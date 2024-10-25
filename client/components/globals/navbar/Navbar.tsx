// components/Navbar.tsx
"use client";
import { Box, Flex, Text, Button, Stack, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "./Navbar.scss";
import { api, logout } from "@/app/api";
import { useToast } from "@chakra-ui/react";
export default function Navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toast = useToast();

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        toast({
            title: "Logged out successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    function handleLogin() {
        router.push("/auth/login");
    }

    function handleSignUp() {
        router.push("/auth/signup");
    }

    function handleNavigateTo(path: string) {
        router.push(path);
        setIsMenuOpen(false);
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    const checkAuth = async () => {
        api.get("accounts/me/")
            .then((res) => {
                setIsAuthenticated(true);
            })
            .catch((err) => {
                setIsAuthenticated(false);
            });
    };
    useEffect(() => {
        checkAuth();
    }, []);
    return (
        <Box
            as="nav"
            bg="white"
            color="var(--text-color)"
            fontFamily="var(--font-heading)"
            p={4}
            position="relative"
            display={"list-item"}
        >
            <Flex
                align="center"
                justify="space-between"
                maxWidth="1200px"
                mx="auto"
            >
                <Text fontSize="xl" fontWeight="bold">
                    Orbit
                </Text>

                <IconButton
                    icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Toggle Navigation"
                    variant="outline"
                    onClick={toggleMenu}
                    display={{ base: "block", md: "none" }}
                />

                <Flex align="center" display={{ base: "none", md: "flex" }}>
                    <Stack
                        direction="row"
                        spacing={10}
                        mr={14}
                        fontWeight={500}
                    >
                        <Text
                            cursor="pointer"
                            onClick={() => handleNavigateTo("/")}
                        >
                            Home
                        </Text>
                        <Text
                            cursor="pointer"
                            onClick={() => handleNavigateTo("/employees")}
                        >
                            Employees
                        </Text>
                    </Stack>
                    {isAuthenticated ? (
                        <Button
                            bg={"var(--secondary-color)"}
                            onClick={() => {
                                handleLogout();
                            }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button
                                colorScheme="teal"
                                variant="outline"
                                onClick={handleSignUp}
                                mr={4}
                            >
                                Sign Up
                            </Button>
                            <Button
                                bg={"var(--secondary-color)"}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                        </>
                    )}
                </Flex>
            </Flex>

            {isMenuOpen && (
                <Flex
                    className="mobile-menu"
                    direction="column"
                    align="center"
                    width="60%"
                    height={"45vh"}
                    position="absolute"
                    right={isMenuOpen ? "0" : "-100%"}
                    transition="left 1s ease"
                    top="70px"
                    left="42%"
                    bg="var(--menu-color)"
                    borderRadius={10}
                    p={7}
                    zIndex={100}
                    display={{ base: "flex", md: "none" }}
                >
                    <Text
                        cursor="pointer"
                        onClick={() => handleNavigateTo("/")}
                    >
                        Home
                    </Text>
                    <Text
                        cursor="pointer"
                        onClick={() => handleNavigateTo("/employees")}
                    >
                        Employees
                    </Text>

                    {isAuthenticated ? (
                        <Button
                            bg={"var(--secondary-color)"}
                            onClick={() => {
                                handleLogout();
                            }}
                            mt={20}
                            width={"100%"}
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button
                                colorScheme="teal"
                                variant="outline"
                                onClick={handleSignUp}
                                mt={20}
                                width={"100%"}
                            >
                                Sign Up
                            </Button>
                            <Button
                                bg={"var(--secondary-color)"}
                                onClick={handleLogin}
                                mt={4}
                                width={"100%"}
                            >
                                Login
                            </Button>
                        </>
                    )}
                </Flex>
            )}
        </Box>
    );
}
