"use client";
import {
    Box,
    Heading,
    Text,
    VStack,
    Icon,
    Flex,
    Container,
} from "@chakra-ui/react";
import { FaUser, FaChartLine, FaTasks } from "react-icons/fa"; // Icons from react-icons

export default function HowItWorks() {
    return (
        <Box bg="var(--form-color)" py={16} color="black">
            <Container maxW="1200px">
                {/* Main Heading */}
                <Heading as="h2" size="2xl" textAlign="center" mb={8}>
                    How it works
                </Heading>

                <Text textAlign="center" mb={12} fontSize="lg">
                    Our HR management tool simplifies employee registration,
                    performance tracking, and task assignment, offering a
                    streamlined experience for HR departments and employees.
                </Text>

                {/* How It Works Cards */}
                <Flex justify="space-around" wrap="wrap">
                    {/* Register Employee */}
                    <VStack
                        bg="#004246"
                        color="white"
                        borderRadius="lg"
                        p={8}
                        m={4}
                        maxW="320px"
                        textAlign="center"
                        boxShadow="lg"
                    >
                        <Icon
                            as={FaUser}
                            boxSize={12}
                            color="var(--accent-color)"
                            mb={4}
                        />
                        <Heading size="md" fontFamily="var(--font-heading)">
                            Register Employee
                        </Heading>
                        <Text
                            fontSize="sm"
                            mt={2}
                            fontWeight={"500"}
                            fontFamily="var(--font-heading)"
                        >
                            Easily register new employees with all necessary
                            information like name, email, department, and
                            contact details.
                        </Text>
                    </VStack>

                    {/* Manage Employee Data */}
                    <VStack
                        bg="#004246"
                        color="white"
                        borderRadius="lg"
                        p={8}
                        m={4}
                        maxW="320px"
                        textAlign="center"
                        boxShadow="lg"
                    >
                        <Icon
                            as={FaChartLine}
                            boxSize={12}
                            color="var(--accent-color)"
                            mb={4}
                        />
                        <Heading size="md" fontFamily="var(--font-heading)">
                            Manage Employee Data
                        </Heading>
                        <Text
                            fontSize="sm"
                            mt={2}
                            fontWeight={"500"}
                            fontFamily="var(--font-heading)"
                        >
                            Keep track of all employee records, including
                            personal details, performance metrics, and
                            department assignments.
                        </Text>
                    </VStack>

                    {/* Assign and Track Tasks */}
                    <VStack
                        bg="#004246"
                        color="white"
                        borderRadius="lg"
                        p={8}
                        m={4}
                        maxW="320px"
                        textAlign="center"
                        boxShadow="lg"
                    >
                        <Icon
                            as={FaTasks}
                            boxSize={12}
                            color="var(--accent-color)"
                            mb={4}
                        />
                        <Heading size="md" fontFamily="var(--font-heading)">
                            Assign and Track Tasks
                        </Heading>
                        <Text
                            fontSize="sm"
                            fontStyle="bd"
                            mt={2}
                            fontFamily="var(--font-heading)"
                            fontWeight={"500"}
                        >
                            Assign tasks to employees and monitor progress to
                            ensure deadlines are met efficiently.
                        </Text>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    );
}
