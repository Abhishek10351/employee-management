"use client";
import { Button, ButtonGroup, Td, Tr } from "@chakra-ui/react";
import { Employee } from "../../../types/employee";

export default function EmployeeRow({ employee }: { employee: Employee }) {
    const { id, name, email, role, salary, department } = employee;
    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{name}</Td>
            <Td>{email}</Td>
            <Td>{role}</Td>
            <Td>{department}</Td>
            <Td>{salary}</Td>
            <Td>
                <ButtonGroup>
                    <Button colorScheme="blue">Edit</Button>
                    <Button colorScheme="red">Delete</Button>
                </ButtonGroup>
            </Td>
        </Tr>
    );
}
