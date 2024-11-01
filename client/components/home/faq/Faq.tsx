import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
} from "@chakra-ui/react";

export default function Faq() {
    // Static colors for modern styles
    // const bgColor = "gray.100";
    // const panelBg = "white";
    // const headingColor = "purple.500";
    const textColor = "gray.700";
    const borderColor = "gray.300";

    return (
        <Box py={12}>
            <Container maxW="800px">
                {/* Main Heading */}
                <Heading
                    as="h2"
                    size="xl"
                    textAlign="center"
                    mb={8}
                    color="var(--text-colorr)"
                    fontWeight="bold"
                    fontFamily="var(--font-primary)"
                >
                    Frequently Asked Questions
                </Heading>

                {/* FAQ Accordion */}
                <Accordion allowToggle>
                    {/* FAQ Item */}
                    <AccordionItem border="none" my={4}>
                        <h2>
                            <AccordionButton
                                _hover={{ bg: "purple.50" }}
                                _expanded={{
                                    bg: "var(--primary-color)",
                                    color: "var(--text-color)",
                                }}
                                border="1px solid"
                                borderColor={borderColor}
                                borderRadius="md"
                                boxShadow="md"
                                p={6}
                                bg={"var(--form-color)"}
                            >
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    fontSize="lg"
                                    fontWeight="semibold"
                                    fontFamily="var(--font-primary)"
                                >
                                    What is Orbit and how does it work?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            bg={"var(--form-color)"}
                            borderBottomRadius="md"
                            p={6}
                            color={textColor}
                            fontFamily="var(--font-primary)"
                        >
                            Orbit is an advanced HR management tool designed to
                            streamline employee registration, task assignment,
                            and performance tracking. It helps HR departments
                            efficiently manage their workforce and improve
                            overall productivity.
                        </AccordionPanel>
                    </AccordionItem>

                    {/* FAQ Item */}
                    <AccordionItem border="none" my={4}>
                        <h2>
                            <AccordionButton
                                _hover={{ bg: "purple.50" }}
                                _expanded={{
                                    bg: "var(--primary-color)",
                                    color: "var(--text-color)",
                                }}
                                border="1px solid"
                                borderColor={borderColor}
                                borderRadius="md"
                                boxShadow="md"
                                p={6}
                                bg={"var(--form-color)"}
                            >
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    fontSize="lg"
                                    fontWeight="semibold"
                                    fontFamily="var(--font-primary)"
                                >
                                    How do I register a new employee in Orbit?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            bg={"var(--form-color)"}
                            borderBottomRadius="md"
                            p={6}
                            color={textColor}
                            fontFamily="var(--font-primary)"
                        >
                            To register a new employee, go to the &quot;Register
                            Employee&quot; section, fill in their personal
                            details (name, department, email, etc.), and submit
                            the form. The employee will be added to your system
                            and can be managed from the dashboard.
                        </AccordionPanel>
                    </AccordionItem>

                    {/* FAQ Item */}
                    <AccordionItem border="none" my={4}>
                        <h2>
                            <AccordionButton
                                _hover={{ bg: "purple.50" }}
                                _expanded={{
                                    bg: "var(--primary-color)",
                                    color: "var(--text-color)",
                                }}
                                border="1px solid"
                                borderColor={borderColor}
                                borderRadius="md"
                                boxShadow="md"
                                p={6}
                            >
                                <Box
                                    flex="1"
                                    textAlign="left"
                                    fontSize="lg"
                                    fontWeight="semibold"
                                    fontFamily="var(--font-primary)"
                                >
                                    Can I track employee performance in Orbit?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            bg={"var(--form-color)"}
                            borderBottomRadius="md"
                            p={6}
                            color={textColor}
                            fontFamily="var(--font-primary)"
                        >
                            Yes, Orbit provides real-time tracking of employee
                            performance through detailed analytics and
                            performance metrics. This allows you to make
                            data-driven decisions for performance reviews and
                            promotions.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Box>
    );
}
