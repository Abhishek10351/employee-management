"use client";
import {
    Button,
    ButtonGroup,
    Td,
    Tr,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from "@chakra-ui/react";
import { Employee } from "../../../types/employee";
import { useRef, useState } from "react";

interface EmployeeRowProps {
    employee: Employee;
    deleteEmployee: (id: number) => void;
}

export default function EmployeeRow({
    employee,
    deleteEmployee,
}: EmployeeRowProps) {
    const { id, name, email, position, salary, department } = employee;
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const cancelRef = useRef<HTMLButtonElement>(null);

    const handleDelete = () => {
        deleteEmployee(id);
        setIsDialogOpen(false);
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
                    <Button
                        colorScheme="red"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        Delete
                    </Button>
                </ButtonGroup>

                <AlertDialog
                    isOpen={isDialogOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={() => setIsDialogOpen(false)}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent fontFamily="var(--font-primary)">
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                Delete Employee?
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                Are you sure you want to delete this employee?
                                This action cannot be undone.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button
                                    ref={cancelRef}
                                    onClick={() => setIsDialogOpen(false)}
                                >
                                    No
                                </Button>
                                <Button
                                    colorScheme="red"
                                    onClick={handleDelete}
                                    ml={3}
                                >
                                    Yes
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </Td>
        </Tr>
    );
}
