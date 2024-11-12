"use client";

import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Heading,
    Text,
    useToast,
} from "@chakra-ui/react";
import Link from "next/link";

import { api } from "@/app/api";
import { useRouter } from "next/navigation";
export default function SignUp() {
    const router = useRouter();
    const toast = useToast();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!email || !password) {
            toast({
                title: "Please fill all the fields.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        if (password !== confirmPassword) {
            toast({
                title: "Passwords do not match.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        const details = {
            email: email,
            password: password,
        };
        setLoading(true);
        api.post("/accounts/create/", details)
            .then((res) => {
                setLoading(false);
                console.log("Signup Response:", res.data);
                toast({
                    title: "Account created successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                setTimeout(() => {
                    router.push("/auth/login");
                }, 2000);
            })
            .catch((err) => {
                setLoading(false);
                if (err.response && err.response.data) {
                    const data = err.response.data;
                    let message =
                        data.message ||
                        data.detail ||
                        data.email ||
                        data.password ||
                        data;
                    if (Array.isArray(message)) {
                        message = message[0];
                    }
                    if (typeof message === "object") {
                        message = "An error occurred. Please try again later.";
                    }

                    toast({
                        title: message,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: "An error occurred. Please try again.",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                }
            });
    }

    return (
        <Box
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                w="full"
                maxW="400px"
                p={6}
                borderWidth={1}
                borderRadius="lg"
                boxShadow="lg"
                bg={"var(--form-color)"}
                fontFamily={"var(--font-primary)"}
            >
                <Heading mb={4} fontSize="2xl" textAlign="center">
                    Sign Up
                </Heading>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Email address</FormLabel>

                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </FormControl>

                        <Button
                            bg="var(--accent-color)"
                            type="submit"
                            width="full"
                            isLoading={loading}
                            loadingText="Creating Account"
                            _hover={{ bg: "yellow.300" }}
                        >
                            Sign Up
                        </Button>

                        <Text textAlign="center" mt={2}>
                            Already have an account?{" "}
                            <Button
                                variant="link"
                                colorScheme="teal"
                                // onClick={navigateToLogin}
                            >
                                {/* Login */}
                                <Link href="/auth/login">Login</Link>
                            </Button>
                        </Text>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
}
