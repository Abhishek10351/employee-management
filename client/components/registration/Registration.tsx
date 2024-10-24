"use client";

import { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Select,
    useToast,
    HStack,
    Heading,
} from "@chakra-ui/react";
import { api } from "@/app/api";

export default function Registration() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        position: "",
        salary: "",
        hire_date: "",
    });

    const toast = useToast();

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) {
        const updatedFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        };
        setFormData(updatedFormData);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const response = await api.post("employees/", formData);
            toast({
                title: "Registration Successful",
                description: "Employee has been registered successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                department: "",
                position: "",
                salary: "",
                hire_date: "",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to register employee. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            console.error("Registration failed", error);
        }
    }

    function handleClear() {
        setFormData({
            name: "",
            email: "",
            phone: "",
            department: "",
            position: "",
            salary: "",
            hire_date: "",
        });

        toast({
            title: "Form Cleared",
            description: "All fields have been reset.",
            status: "info",
            duration: 3000,
            isClosable: true,
        });
    }

    return (
        <Box
            maxW="700px"
            mx="auto"
            mt={10}
            p={5}
            boxShadow="lg"
            borderRadius="md"
            bg={"var(--form-color)"}
        >
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                Employee Registration Form
            </Heading>

            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                        />
                    </FormControl>

                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                    </FormControl>

                    <FormControl id="phone" isRequired>
                        <FormLabel>Phone</FormLabel>
                        <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                        />
                    </FormControl>

                    <FormControl id="department" isRequired>
                        <FormLabel>Department</FormLabel>
                        <Select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            placeholder="Select department"
                        >
                            <option value="HR">HR</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finance">Finance</option>
                            <option value="Sales">Sales</option>
                        </Select>
                    </FormControl>

                    <FormControl id="position" isRequired>
                        <FormLabel>Position</FormLabel>
                        <Input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            placeholder="Enter position"
                        />
                    </FormControl>

                    <FormControl id="salary" isRequired>
                        <FormLabel>Salary</FormLabel>
                        <Input
                            type="number"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            placeholder="Enter salary"
                            step="0.01"
                        />
                    </FormControl>

                    <FormControl id="hire_date" isRequired>
                        <FormLabel>Hire Date</FormLabel>
                        <Input
                            type="date"
                            name="hire_date"
                            value={formData.hire_date}
                            onChange={handleChange}
                            placeholder="Select hire date"
                        />
                    </FormControl>

                    <HStack spacing={4} width="full">
                        <Button
                            type="submit"
                            bg="var(--accent-color)"
                            _hover={{ bg: "var(--accent-hover)" }}
                            color="white"
                            width="full"
                        >
                            Register Employee
                        </Button>
                        <Button
                            onClick={handleClear}
                            colorScheme="red"
                            width="full"
                        >
                            Clear
                        </Button>
                    </HStack>
                </VStack>
            </form>
        </Box>
    );
}
