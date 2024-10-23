import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Navbar } from "../../components/globals";
import { Footer } from "../../components/globals";
import { EmployeeTable } from "../../components/employees";
import { Work } from "../../components/home";
export default function HomePage() {
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
                borderRadius="10%"
            >
                <Heading as="h1" size="2xl" mb={4}>
                    Welcome to Orbit
                </Heading>
                <Text fontSize="xl" mb={8}>
                    Your HR Management Tool
                </Text>
                <Button
                    colorScheme="blackAlpha"
                    // onClick={handleButtonClick}
                >
                    Learn More
                </Button>
            </Box>
            {/* <EmployeeTable /> */}
            <Work />
            <Footer />
        </div>
    );
}
