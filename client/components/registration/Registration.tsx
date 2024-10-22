"use client";

import { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Textarea,
    Select,
    useToast,
    HStack,
    Heading,
} from "@chakra-ui/react";

export default function Registration() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        address: "",
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

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        toast({
            title: "Registration Successful",
            description: "Employee has been registered.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
        console.log(formData);
    }

    function handleClear() {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            department: "",
            address: "",
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
                    <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter first name"
                        />
                    </FormControl>

                    <FormControl id="lastName" isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter last name"
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
                        </Select>
                    </FormControl>

                    <FormControl id="address">
                        <FormLabel>Address</FormLabel>
                        <Textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter address"
                        />
                    </FormControl>

                    <HStack spacing={4} width="full">
                        <Button
                            type="submit"
                            bg="var(--accent-color)"
                            width="full"
                            textAlign="center"
                            whiteSpace="normal"
                            px={4}
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
