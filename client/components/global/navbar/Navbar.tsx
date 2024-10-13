// components/Navbar.tsx
"use client";
import { Box, Flex, Text, Button, Stack, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"; // Import icons
import "./Navbar.scss"; // Import your styles

export default function Navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    function handleLogin() {
        router.push("/login");
    }

    function handleSignUp() {
        router.push("/signup");
    }

    function handleNavigateTo(path: string) {
        router.push(path);
        setIsMenuOpen(false); // Close menu on navigation
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu
    }

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

                {/* Hamburger icon only visible on mobile */}
                <IconButton
                    icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Toggle Navigation"
                    variant="outline"
                    onClick={toggleMenu}
                    display={{ base: "block", md: "none" }} // Show only on mobile
                />

                {/* Desktop Navbar Items */}
                <Flex
                    align="center"
                    display={{ base: "none", md: "flex" }} // Hidden on mobile
                >
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
                            onClick={() => handleNavigateTo("/about-us")}
                        >
                            About Us
                        </Text>
                        <Text
                            cursor="pointer"
                            onClick={() => handleNavigateTo("/features")}
                        >
                            Features
                        </Text>
                        <Text
                            cursor="pointer"
                            onClick={() => handleNavigateTo("/blog")}
                        >
                            Blog
                        </Text>
                    </Stack>
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        onClick={handleSignUp}
                        mr={4}
                    >
                        Sign Up
                    </Button>
                    <Button bg={"var(--secondary-color)"} onClick={handleLogin}>
                        Login
                    </Button>
                </Flex>
            </Flex>

            {/* Mobile Menu */}
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
                    zIndex={100} // Ensure it appears above other content
                    display={{ base: "flex", md: "none" }} // Visible only on
                >
                    <Text
                        cursor="pointer"
                        onClick={() => handleNavigateTo("/")}
                    >
                        Home
                    </Text>
                    <Text
                        cursor="pointer"
                        onClick={() => handleNavigateTo("/about-us")}
                        mt={5}
                    >
                        About Us
                    </Text>
                    <Text
                        cursor="pointer"
                        onClick={() => handleNavigateTo("/features")}
                        mt={5}
                    >
                        Features
                    </Text>
                    <Text
                        cursor="pointer"
                        onClick={() => handleNavigateTo("/blog")}
                        mt={5}
                    >
                        Blog
                    </Text>
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
                </Flex>
            )}
        </Box>
    );
}
