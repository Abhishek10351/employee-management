"use client";

import { useEffect, useState } from "react";
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
    Spinner,
    Center,
    Text,
} from "@chakra-ui/react";
import { api } from "@/app/api";
import { useRouter } from "next/navigation";

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
    const [authenticated, setAuthenticated] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(true);
    const router = useRouter();

    const checkAuth = async () => {
        setLoadingAuth(true);
        try {
            await api.get("accounts/me/");
            setAuthenticated(true);
        } catch {
            setAuthenticated(false);
        } finally {
            setLoadingAuth(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const toast = useToast();

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        const updatedFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        };
        setFormData(updatedFormData);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        await api.post("employees/", formData)
            .then(() => {
                toast({
                    title: "Registration Successful",
                    description: "Employee has been registered successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                router.push("/employees");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    department: "",
                    position: "",
                    salary: "",
                    hire_date: "",
                });
            })
            .catch((e) => {
                if (e.response) {
                    const res = e.response;
                    const { data } = res;
                    let message: object| string =
                        data.name ||
                        data.email ||
                        data.phone ||
                        data.department ||
                        data.position ||
                        data.salary ||
                        data.hire_date ||
                        data.detail ||
                        data;
                    if (Array.isArray(message)) {
                        message = message[0];
                    }
                    if (typeof message === "object") {
                        message = "An error occurred. Please try again later.";
                    }
                    toast({
                        title: "Error",
                        description: message,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                    });
                    return;
                }
                toast({
                    title: "Error",
                    description:
                        "Failed to register employee. Please try again.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            });
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

    if (loadingAuth) {
        return (
            <Center h="80vh">
                <Spinner size="xl" color="var(--accent-color)" />
            </Center>
        );
    }

    return (
        <>
            {!authenticated ? (
                <Box
                    maxW="700px"
                    mx="auto"
                    mt={10}
                    p={5}
                    boxShadow="lg"
                    borderRadius="md"
                    bg="var(--form-color)"
                    textAlign="center"
                >
                    <Heading as="h2" size="md" mb={4}>
                        Access Restricted
                    </Heading>
                    <Text color="gray.500">
                        You must be logged in to register an employee.
                    </Text>
                </Box>
            ) : (
                <Box
                    maxW="700px"
                    mx="auto"
                    mt={10}
                    p={8}
                    boxShadow="lg"
                    borderRadius="md"
                    bg="var(--form-color)"
                >
                    <Heading
                        as="h2"
                        size="lg"
                        mb={6}
                        textAlign="center"
                        fontFamily={"var(--font-heading)"}
                    >
                        Employee Registration Form
                    </Heading>
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={5} fontFamily={"var(--font-primary)"}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter name"
                                    focusBorderColor="var(--accent-color)"
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
                                    focusBorderColor="var(--accent-color)"
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
                                    focusBorderColor="var(--accent-color)"
                                />
                            </FormControl>

                            <FormControl id="department" isRequired>
                                <FormLabel>Department</FormLabel>
                                <Select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    placeholder="Select department"
                                    focusBorderColor="var(--accent-color)"
                                >
                                    <option value="HR">HR</option>
                                    <option value="Engineering">
                                        Engineering
                                    </option>
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
                                    focusBorderColor="var(--accent-color)"
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
                                    focusBorderColor="var(--accent-color)"
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
                                    focusBorderColor="var(--accent-color)"
                                />
                            </FormControl>

                            <HStack spacing={4} width="full">
                                <Button
                                    type="submit"
                                    bg="var(--accent-color)"
                                    color="black"
                                    _hover={{ bg: "var(--accent-color)" }}
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
            )}
        </>
    );
}
