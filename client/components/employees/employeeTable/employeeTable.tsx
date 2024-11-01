"use client";
import { api } from "@/app/api";
import { useEffect, useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Container,
    Text,
    Heading,
    Flex,
    Link,
    Button,
    Box,
    Spinner,
    Center,
} from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";
import { EmployeePaginator, EmployeeRow } from "../.";

export default function EmployeeTable() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const showEmployees = async () => {
        setLoading(true);
        api.get("employees/")
            .then((res) => {
                const { data } = res;
                setEmployees(data.results);
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                } else if (err.request) {
                    console.log(err.request);
                } else {
                    console.log("Error", err.message);
                }
            })
            .finally(() => setLoading(false)); // Stop loading
    };

    const deleteEmploy = async (id: number) => {
        api.delete(`employees/${id}/`)
            .then(() => {
                showEmployees();
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                } else {
                    console.log("Error", err);
                }
            });
    };

    const handleDelete = (id: number) => {
        deleteEmploy(id);
    };

    useEffect(() => {
        showEmployees();
    }, []);

    return (
        <Container maxW="container.xl" bg="var(--background-color)" p={[4, 6]}>
            <Heading
                as="h1"
                size="lg"
                textAlign="center"
                mb={[6, 10]}
                color="var(--text-color)"
                fontFamily="var(--font-heading)"
            >
                Employee Log
            </Heading>
            <Text
                fontSize={["md", "lg"]}
                textAlign="center"
                mb={[2, 4]}
                color="var(--text-color)"
                fontFamily="var(--font-secondary)"
            >
                This table contains the details of all employees in the company.
            </Text>
            <Flex justifyContent="flex-end" mb={[4, 2]} mr={0}>
                <Link href="/employees/register">
                    <Button
                        bg="var(--accent-color)"
                        color="var(--text-color)"
                        _hover={{ bg: "var(--secondary-color)" }}
                        fontFamily="var(--font-primary)"
                        rightIcon={<FaUserPlus />}
                        mt={[4, 10]}
                        mb={0}
                    >
                        Add Employee
                    </Button>
                </Link>
            </Flex>

            {loading ? (
                <Center mt={10}>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="var(--accent-color)"
                        size="xl"
                    />
                </Center>
            ) : (
                <Box
                    overflowX="auto"
                    w="100%"
                    maxWidth={["100%", "1200px"]}
                    mx="auto"
                >
                    <Table
                        variant="simple"
                        colorScheme="teal"
                        bg="var(--stack-color)"
                        mt={6}
                        borderRadius="md"
                        boxShadow="sm"
                        fontFamily="var(--font-primary)"
                        minWidth="800px"
                    >
                        <Thead bg="var(--primary-color)">
                            <Tr>
                                <Th color="var(--text-color)" fontSize="sm">
                                    Employee ID
                                </Th>
                                <Th color="var(--text-color)" fontSize="sm">
                                    Name
                                </Th>
                                <Th color="var(--text-color)" fontSize="sm">
                                    Email
                                </Th>
                                <Th color="var(--text-color)" fontSize="sm">
                                    Position
                                </Th>
                                <Th color="var(--text-color)" fontSize="sm">
                                    Department
                                </Th>
                                <Th color="var(--text-color)" fontSize="sm">
                                    Salary
                                </Th>
                                <Th color="var(--text-color)" fontSize="sm">
                                    Actions
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {employees.length > 0 ? (
                                employees.map((employee, num) => (
                                    <EmployeeRow
                                        key={num}
                                        employee={employee}
                                        deleteEmployee={handleDelete}
                                    />
                                ))
                            ) : (
                                <Tr>
                                    <Td
                                        colSpan={7}
                                        textAlign="center"
                                        color="var(--text-color)"
                                    >
                                        No available employees
                                    </Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
                </Box>
            )}
            <EmployeePaginator />
        </Container>
    );
}
