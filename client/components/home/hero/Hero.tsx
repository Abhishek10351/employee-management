"use client";

import {
    Box,
    Heading,
    Text,
    Button,
    Flex,
    Image,
    Icon,
    HStack,
    VStack,
} from "@chakra-ui/react";
import { ChevronRightIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { FaUsers, FaHeadset, FaShieldAlt } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import { useState, useEffect } from "react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
`;

export default function Hero() {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <Box height="100vh" p={5} position="relative">
            <Flex
                alignItems="center"
                justifyContent="space-between"
                height="100%"
                flexDirection={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
            >
                <Box
                    flex="1"
                    p={6}
                    maxWidth="800px"
                    mb={50}
                    animation={`${fadeIn} 0.8s ease-in-out`}
                    opacity={isAnimated ? 1 : 0}
                    transform={
                        isAnimated ? "translateY(0)" : "translateY(10px)"
                    }
                    transition="opacity 0.8s, transform 0.8s"
                >
                    <Heading
                        as="h1"
                        fontFamily={"var(--font-heading)"}
                        fontWeight={"800"}
                    >
                        <Image
                            src="/assets/brand-logos/logo-orbit-01.png"
                            alt="Orbit Logo"
                            width={450}
                            ml={-12}
                            transition="transform 0.2s ease-in-out"
                            _hover={{ transform: "scale(1.05)" }}
                        />
                    </Heading>
                    <Text
                        fontSize="xl"
                        mt={2}
                        mb={2}
                        color="var(--text-color)"
                        fontFamily={"var(--font-primary)"}
                        fontWeight={"500"}
                    >
                        Your HR Management Tool
                    </Text>
                    <Text
                        fontSize="md"
                        color="gray.500"
                        mb={5}
                        maxW="500px"
                        fontFamily={"var(--font-primary)"}
                    >
                        Simplify your HR processes with our comprehensive tool,
                        from payroll to employee engagement.
                    </Text>
                    <Button
                        bg={"var(--accent-color)"}
                        mb={20}
                        size="lg"
                        animation={`${fadeIn} 1.2s ease-in-out`}
                        opacity={isAnimated ? 1 : 0}
                        transform={isAnimated ? "scale(1)" : "scale(0.9)"}
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                            transform: "scale(1.05)",
                            boxShadow: "0 4px 6px rgba(255, 231, 0, 0.5)",
                            bg: "var(--accent-color)",
                        }}
                        rightIcon={
                            <ChevronRightIcon
                                transition="margin-left 0.3s"
                                _hover={{ ml: 2 }}
                            />
                        }
                    >
                        Get started
                    </Button>

                    <HStack
                        spacing={8}
                        mt={0}
                        mb={4}
                        justify={{ base: "center", md: "flex-start" }}
                    >
                        <VStack>
                            <Icon
                                as={FaUsers}
                                boxSize={8}
                                color="var(--text-color)"
                            />
                            <Text
                                fontSize="2xl"
                                color="var(--text-color)"
                                fontWeight="bold"
                                fontFamily={"var(--font-primary)"}
                            >
                                100+
                            </Text>
                            <Text
                                fontSize="sm"
                                color="gray.500"
                                fontFamily={"var(--font-primary)"}
                            >
                                Companies Trust Us
                            </Text>
                        </VStack>
                        <VStack>
                            <Icon
                                as={FaHeadset}
                                boxSize={8}
                                color="var(--text-color)"
                            />
                            <Text
                                fontSize="2xl"
                                color="var(--text-color)"
                                fontWeight="bold"
                                fontFamily={"var(--font-primary)"}
                            >
                                24/7
                            </Text>
                            <Text
                                fontSize="sm"
                                color="gray.500"
                                fontFamily={"var(--font-primary)"}
                            >
                                Support Available
                            </Text>
                        </VStack>
                        <VStack>
                            <Icon
                                as={FaShieldAlt}
                                boxSize={8}
                                color="var(--text-color)"
                            />
                            <Text
                                fontSize="2xl"
                                color="var(--text-color)"
                                fontWeight="bold"
                                fontFamily={"var(--font-primary)"}
                            >
                                99.9%
                            </Text>
                            <Text
                                fontSize="sm"
                                color="gray.500"
                                fontFamily={"var(--font-primary)"}
                            >
                                Uptime Guarantee
                            </Text>
                        </VStack>
                    </HStack>
                </Box>

                <Box
                    flex="1"
                    display={{ base: "none", md: "flex" }}
                    justifyContent="center"
                    mt={{ base: 8, md: 0 }}
                    animation={`${fadeIn} 1s ease-in-out`}
                    opacity={isAnimated ? 1 : 0}
                    transform={
                        isAnimated ? "translateY(0)" : "translateY(10px)"
                    }
                    transition="opacity 0.8s, transform 0.8s"
                >
                    <Image
                        src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                        alt="3D Illustration"
                        maxWidth={{ base: "300px", lg: "500px", xl: "500px" }}
                        objectFit="contain"
                        transition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.05) rotate(2deg)" }}
                    />
                </Box>
            </Flex>

            <Box
                position="absolute"
                bottom={{ base: "80px", md: "5" }}
                left="50%"
                transform="translateX(-50%)"
                display="flex"
                flexDirection="column"
                alignItems="center"
                animation={`${bounce} 2s infinite`}
                cursor="pointer"
            >
                <Box
                    backgroundColor="var(--menu-color)"
                    borderRadius="full"
                    padding="10px"
                    boxShadow="md"
                >
                    <ArrowDownIcon
                        boxSize={8}
                        color="var(--primary-color)"
                        _hover={{ color: "var(--accent-color)" }}
                    />
                </Box>
                <Text
                    fontSize="sm"
                    color="gray.600"
                    mt={1}
                    fontFamily={"var(--font-primary)"}
                >
                    Scroll down
                </Text>
            </Box>
        </Box>
    );
}
