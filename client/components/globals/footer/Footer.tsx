"use client";
import {
    Box,
    Text,
    HStack,
    Link,
    Icon,
    VStack,
    Flex,
    Image,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
    return (
        <Box
            as="footer"
            bg="var(--footer-color)"
            color="black"
            py={6}
            px={10}
            fontFamily={"var(--font-footer)"}
        >
            <Flex justify="space-between" align="center">
                <Box>
                    <Image
                        src="/assets/brand-logos/logo-orbit-01.png"
                        alt="Orbit Logo"
                        width={150}
                        height={70}
                    />
                </Box>

                <Box textAlign="right">
                    <Text fontSize="lg" fontWeight="semibold">
                        Office Address
                    </Text>
                    <Text fontSize="md">
                        CIT Kokrajhar, Kokrajhar, Assam, 783370
                    </Text>
                    <Text fontSize="md">India</Text>
                </Box>
            </Flex>

            <HStack spacing={8} justify="center" mt={2}>
                <Link href="https://github.com/yourprofile" isExternal>
                    <Icon as={FaGithub} boxSize={8} />
                </Link>
                <Link href="https://linkedin.com/in/yourprofile" isExternal>
                    <Icon as={FaLinkedin} boxSize={8} />
                </Link>
                <Link href="https://twitter.com/yourprofile" isExternal>
                    <Icon as={FaTwitter} boxSize={8} />
                </Link>
            </HStack>

            <VStack mt={4} spacing={0}>
                <Text fontSize="md">
                    © {new Date().getFullYear()} Orbit. All rights reserved.
                </Text>
                <Link href="/privacy-policy" fontSize="sm" color="grey.200">
                    Privacy Policy
                </Link>
            </VStack>
            <VStack mt={4} spacing={0}>
                <Text fontSize="sm">
                    Created by &nbsp;
                    <Link
                        href="https://linktr.ee/Abhishek10351"
                        fontSize="sm"
                        mr={2}
                        target="_blank"
                    >
                        Abhishek Kashyap
                    </Link>
                    &
                    <Link
                        href="https://www.linkedin.com/in/subhrajittalukdar/"
                        fontSize="sm"
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
