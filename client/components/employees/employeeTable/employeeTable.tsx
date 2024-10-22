"use client";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Employee} from "../../../types/employee";
import { EmployeePaginator, EmployeeRow } from "../.";

import { ButtonGroup, Button } from "@chakra-ui/react";

export default function EmployeeTable() {
    // create an array of employees
    const employees = [
        {
            id: 1,
            name: "John Doe",
            email: "lol@lol.com",
            role: "HR",
            department: "HR",
            salary: 1000,
        },
        {
            id: 2,
            name: "Abhishek",
            email: "mailme@gmail.com",
            role: "Developer",
            department: "Engineering",
            salary: 20000,
        },
        {
            id: 3,
            name: "John Smith",
            email: "test",
            role: "Manager",
            department: "Management",
            salary: 3000,
        },
    ];
    return (
        <>
            <Table variant="striped" colorScheme="cyan">
                <Thead>
                    <Tr>
                        <Th>Employee ID</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Role</Th>
                        <Th>Department</Th>
                        <Th>Salary</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {employees.map((employee) => (
                        <EmployeeRow key={employee.id} employee={employee} />
                    ))}
                </Tbody>
            </Table>
            <EmployeePaginator />
        </>
    );
}
