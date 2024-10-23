"use client";
import { Button, ButtonGroup, Td, Tr } from "@chakra-ui/react";
import { Employee } from "../../../types/employee";
import { useEffect, useState } from "react";
import { api } from "@/app/api";
interface EmployeeRowProps {
    employee: Employee;
    deleteEmployee: (id: number) => void;
}

export default function EmployeeRow({
    employee,
    deleteEmployee,
}: EmployeeRowProps) {
    const { id, name, email, position, salary, department } = employee;
    const handleDelete = () => {
        deleteEmployee(id);
        console.log("Employee Deleted");
    };

    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{name}</Td>
            <Td>{email}</Td>
            <Td>{position}</Td>
            <Td>{department}</Td>
            <Td>{salary}</Td>
            <Td>
                <ButtonGroup>
                    <Button colorScheme="red" onClick={handleDelete}>
                        Delete
                    </Button>
                </ButtonGroup>
            </Td>
        </Tr>
    );
}
