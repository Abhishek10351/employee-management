"use client";
import { Box, Text, HStack, Link, Icon, VStack, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <Box as="footer" bg="gray.800" color="white" py={6} px={10}>
            <Flex justify="space-between" align="center">
                <Box>
                    <Text fontSize="lg" fontWeight="bold">
                        Orbit
                    </Text>
                </Box>

                <Box textAlign="right">
                    <Text fontSize="md" fontWeight="semibold">
                        Office Address
                    </Text>
                    <Text fontSize="sm">
                        Street Name, City, State, ZIP Code
                    </Text>
                    <Text fontSize="sm">Country</Text>
                </Box>
            </Flex>

            <HStack spacing={4} justify="center" mt={4}>
                <Link href="https://github.com/yourprofile" isExternal>
                    <Icon as={FaGithub} boxSize={6} />
                </Link>
                <Link href="https://linkedin.com/in/yourprofile" isExternal>
                    <Icon as={FaLinkedin} boxSize={6} />
                </Link>
                <Link href="https://twitter.com/yourprofile" isExternal>
                    <Icon as={FaTwitter} boxSize={6} />
                </Link>
            </HStack>

            <VStack mt={4} spacing={0}>
                <Text fontSize="sm">
                    © {new Date().getFullYear()} Your Company. All rights
                    reserved.
                </Text>
                <Link href="/privacy-policy" fontSize="sm" color="teal.400">
                    Privacy Policy
                </Link>
            </VStack>
            <VStack mt={4} spacing={0}>
                <Text fontSize="sm">
                    Created by &nbsp;
                    <Link
                        href="https://www.linkedin.com/in/abhishek30125/"
                        fontSize="sm"
                        color="orange.500"
                        mr={2}
                        target="_blank"
                    >
                        Abhishek Kashyap
                    </Link>
                    &nbsp;&
                    <Link
                        href="https://www.linkedin.com/in/subhrajittalukdar/"
                        fontSize="sm"
                        color="orange.500"
                        ml={2}
                        target="_blank"
                    >
                        Subhrajit Talukdar
                    </Link>
                </Text>
            </VStack>
        </Box>
    );
}
