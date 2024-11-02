"use client";
import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    IconButton,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "./Navbar.scss";
import { api, logout } from "@/app/api";

type UserData = {
    email: string;
};

export default function Navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState<UserData | null>(null);
    const toast = useToast();

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        setUserData(null);
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
        try {
            const response = await api.get("accounts/me/");
            setIsAuthenticated(true);
            setUserData(response.data);
        } catch (error) {
            setIsAuthenticated(false);
            setUserData(null);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <Box
            as="nav"
            bg="var(--background-color)"
            color="var(--text-color)"
            fontFamily="var(--font-heading)"
            fontSize="17"
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
                <Image
                    src="/assets/brand-logos/logo-orbit-01.png"
                    alt="Orbit Logo"
                    width={150}
                    height={70}
                />

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
                            fontWeight={600}
                        >
                            Home
                        </Text>
                        <Text
                            cursor="pointer"
                            onClick={() => handleNavigateTo("/employees")}
                            fontWeight={600}
                        >
                            Employees
                        </Text>
                    </Stack>

                    {isAuthenticated ? (
                        <Popover>
                            <PopoverTrigger>
                                <Image
                                    src="/assets/avatar/user.png"
                                    alt="User Avatar"
                                    width={10}
                                    height={10}
                                    borderRadius="full"
                                    mr={4}
                                    cursor="pointer"
                                />
                            </PopoverTrigger>
                            <PopoverContent width="200px">
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Account</PopoverHeader>
                                <PopoverBody>
                                    {userData ? (
                                        <Text fontSize="sm">
                                            {`Logged in as ${userData.email}`}
                                        </Text>
                                    ) : (
                                        <Text fontSize="sm">
                                            Loading user details...
                                        </Text>
                                    )}
                                    <Button
                                        mt={2}
                                        width="100%"
                                        bg="var(--secondary-color)"
                                        onClick={handleLogout}
                                        fontWeight={600}
                                    >
                                        Logout
                                    </Button>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <>
                            <Button
                                _hover={{ bg: "var(--secondary-color)" }}
                                variant="outline"
                                onClick={handleSignUp}
                                mr={4}
                                fontWeight={600}
                                border={"1px solid var(--text-color)"}
                            >
                                Sign Up
                            </Button>
                            <Button
                                bg={"var(--primary-color)"}
                                onClick={handleLogin}
                                _hover={{ bg: "var(--secondary-color)" }}
                                fontWeight={600}
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
                    height={"35vh"}
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
                        mt={2}
                        fontWeight={500}
                    >
                        Home
                    </Text>
                    <Text
                        cursor="pointer"
                        onClick={() => handleNavigateTo("/employees")}
                        mt={5}
                        fontWeight={500}
                    >
                        Employees
                    </Text>

                    {isAuthenticated ? (
                        <Button
                            bg={"var(--secondary-color)"}
                            onClick={handleLogout}
                            mt={20}
                            width={"100%"}
                            fontWeight={500}
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
                                fontWeight={600}
                            >
                                Sign Up
                            </Button>
                            <Button
                                bg={"var(--primary-color)"}
                                onClick={handleLogin}
                                mt={4}
                                width={"100%"}
                                fontWeight={600}
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
