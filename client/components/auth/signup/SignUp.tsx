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

export default function SignUp() {
    const toast = useToast();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
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

        console.log("Signup Details:", { email, password });
        toast({
            title: "Account created successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    }

    return (
        <Box
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.100"
        >
            <Box
                w="full"
                maxW="400px"
                p={6}
                borderWidth={1}
                borderRadius="lg"
                boxShadow="lg"
                bg="white"
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
                        >
                            Sign Up
                        </Button>

                        <Text textAlign="center" mt={2}>
                            Already have an account?{" "}
                            <Link href="/login" passHref>
                                <Button variant="link" colorScheme="teal">
                                    Login
                                </Button>
                            </Link>
                        </Text>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
}
