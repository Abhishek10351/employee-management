import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Navbar from "../../components/global/navbar/Navbar";
import { div } from "framer-motion/client";
export default function Home() {
    return (
        <div>
            <Navbar />
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                bg="var(--background-color)"
                color="var(--text-color)"
                p={4}
            >
                <Heading as="h1" size="2xl" mb={4}>
                    Welcome to Orbit
                </Heading>
                <Text fontSize="xl" mb={8}>
                    Your HR Management Tool
                </Text>
                <Button
                    colorScheme="whiteAlpha"
                    // onClick={handleButtonClick}
                >
                    Learn More
                </Button>
            </Box>
        </div>
    );
}
