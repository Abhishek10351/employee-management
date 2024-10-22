"use client";
import { api } from "@/app/api";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
// import { Employee } from "../../../types/employee";
import { EmployeePaginator, EmployeeRow } from "../.";

export default function EmployeeTable() {
    const [page, setPage] = useState(1);
    const [employees, setEmployees] = useState([
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
    ]);
    const showEmployees = async () => {
        api.get("employees/")
            .then((res) => {
                const { data } = res;
                setEmployees(data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        showEmployees();
    }, []);

    return (
        <>
            <Table variant="striped" colorScheme="teal">
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
                    {employees.length > 0 ? (
                        employees.map((employee) => (
                            <EmployeeRow
                                key={employee.id}
                                employee={employee}
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
