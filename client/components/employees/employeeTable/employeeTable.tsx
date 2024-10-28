"use client";
import { api } from "@/app/api";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { EmployeePaginator, EmployeeRow } from "../.";
import Link from "next/link";
import { Text, Heading, Center, Container } from "@chakra-ui/react";
export default function EmployeeTable() {
    const [employees, setEmployees] = useState([]);

    const showEmployees = async () => {
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
            });
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
        <>
            <Container>
                <Heading as="h1" size="lg" textAlign={"center"}>
                    Employee Table
                </Heading>
                <Text fontSize="lg" textAlign={"center"}>
                    This is a table of all employees in the company
                </Text>
                {/* show content for register option which redirects to next page */}
                <Center>
                    <Link href="/employees/register">
                        <Text
                            fontSize="lg"
                            textAlign={"center"}
                            color={"InfoText"}
                        >
                            Register New Employee
                        </Text>
                    </Link>
                </Center>
            </Container>
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Tr>
                        <Th>Employee ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Position</Th>
                        <Th>Department</Th>
                        <Th>Salary</Th>
                        <Th>Actions</Th>
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
                            <Td colSpan={7} textAlign={"center"}>
                                No available employees
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
            <EmployeePaginator />
        </>
    );
}
