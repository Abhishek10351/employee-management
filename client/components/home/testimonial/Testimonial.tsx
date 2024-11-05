"use client";

import { useEffect, useState } from "react";
import {
    Box,
    Text,
    Heading,
    Image,
    VStack,
    HStack,
    Flex,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

type Testimonial = {
    id: number;
    name: string;
    role: string;
    testimonial: string;
    avatar: string;
};

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const fetchTestimonials = async () => {
            try {
                const response = await fetch(
                    "/data/testimonial/TestimonialData.json",
                );
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            }
        };
    useEffect(() => {
        fetchTestimonials();
    }, []);

    const slideAnimation = keyframes`
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
    `;

    const animationDuration = testimonials.length * 7;

    return (
        <Box padding={10} overflow="hidden">
            <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={8}
                color="gray.700"
            >
                What our Clients say
            </Heading>
            <Flex
                overflow="hidden"
                position="relative"
                width="100%"
                whiteSpace="nowrap"
            >
                <Flex
                    as="div"
                    animation={`${slideAnimation} ${animationDuration}s linear infinite`}
                    style={{
                        display: "flex",
                        gap: "20px",
                    }}
                >
                    {testimonials
                        .concat(testimonials)
                        .map((testimonial, index) => (
                            <Box
                                key={index}
                                width="300px"
                                bg={"var(--menu-color)"}
                                mx={4}
                                p={6}
                                borderRadius="lg"
                                boxShadow="lg"
                                display="inline-block"
                                _hover={{
                                    transform: "scale(1.05)",
                                    boxShadow: "xl",
                                }}
                                transition="transform 0.3s ease"
                            >
                                <HStack spacing={4}>
                                    <Image
                                        src={testimonial.avatar}
                                        alt={`${testimonial.name}'s Avatar`}
                                        borderRadius="full"
                                        boxSize="60px"
                                        objectFit="cover"
                                        borderWidth={2}
                                        borderColor="teal.300"
                                        fallbackSrc="https://via.placeholder.com/60"
                                        filter="grayscale(100%)"
                                    />
                                    <VStack align="start" spacing={1}>
                                        <Text
                                            fontFamily={"var(--font-primary)"}
                                            fontSize="lg"
                                            fontWeight="bold"
                                            color="teal.600"
                                        >
                                            {testimonial.name}
                                        </Text>
                                        <Text
                                            fontFamily={"var(--font-primary)"}
                                            fontSize="sm"
                                            color="gray.500"
                                        >
                                            {testimonial.role}
                                        </Text>
                                    </VStack>
                                </HStack>
                                <Text
                                    fontSize="md"
                                    mt={4}
                                    fontStyle="normal"
                                    fontFamily={"var(--font-primary)"}
                                    color="gray.600"
                                    maxHeight="80px"
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                    whiteSpace="normal"
                                    noOfLines={3}
                                >
                                    &ldquo;{testimonial.testimonial}&rdquo;
                                </Text>
                            </Box>
                        ))}
                </Flex>
            </Flex>
        </Box>
    );
};

export default Testimonials;
