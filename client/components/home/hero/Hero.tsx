import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
export default function Hero() {
    return (
        <Box height="100vh" p={5}>
            <Flex
                alignItems="center"
                justifyContent="space-between"
                height="100%"
                flexDirection={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
            >
                <Box flex="1" p={6} maxWidth="800px" mb={50}>
                    <Heading
                        as="h1"
                        // mb={1}
                        fontFamily={"var(--font-heading)"}
                        fontWeight={"800"}
                    >
                        <Image
                            src="/assets/brand-logos/logo-orbit-01.png"
                            alt="Orbit Logo"
                            width={500}
                        />
                    </Heading>
                    <Text
                        fontSize="xl"
                        mt={0}
                        mb={15}
                        ml={16}
                        color="var(--text-color)"
                        fontFamily={"var(--font-primary)"}
                        fontWeight={"500"}
                    >
                        Your HR Management Tool
                    </Text>
                    <Button
                        bg={"var(--accent-color)"}
                        ml={20}
                        mb={20}
                        size="lg"
                        _hover={{
                            boxShadow: "0 4px 6px rgb(255, 231, 0, 0.5)",
                            bg: "var(--accent-color)",
                        }}
                    >
                        Get started
                    </Button>
                </Box>

                <Box
                    flex="1"
                    display="flex"
                    justifyContent="center"
                    mt={{ base: 8, md: 0 }}
                >
                    <Image
                        src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                        alt="3D Illustration"
                        maxWidth={{ base: "300px", lg: "500px", xl: "600px" }}
                        objectFit="contain"
                    />
                </Box>
            </Flex>
        </Box>
    );
}
