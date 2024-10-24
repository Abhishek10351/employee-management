import {
    Box,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Container,
} from "@chakra-ui/react";

export default function Faq() {
    // Static colors for modern styles
    const bgColor = "gray.100";
    const panelBg = "white";
    const headingColor = "purple.500";
    const textColor = "gray.700";
    const borderColor = "gray.300";

    return (
        <Box bg={bgColor} py={12} borderRadius="30%">
            <Container maxW="800px">
                {/* Main Heading */}
                <Heading
                    as="h2"
                    size="xl"
                    textAlign="center"
                    mb={8}
                    color="#184710"
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
                            bg={panelBg}
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
                            bg={panelBg}
                            borderBottomRadius="md"
                            p={6}
                            color={textColor}
                            fontFamily="var(--font-primary)"
                        >
                            To register a new employee, go to the "Register
                            Employee" section, fill in their personal details
                            (name, department, email, etc.), and submit the
                            form. The employee will be added to your system and
                            can be managed from the dashboard.
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
                            bg={panelBg}
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
                                    Is Orbit secure? How is data protected?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            bg={panelBg}
                            borderBottomRadius="md"
                            p={6}
                            color={textColor}
                            fontFamily="var(--font-primary)"
                        >
                            Orbit employs industry-standard encryption methods
                            to ensure that all employee data is secure. Only
                            authorized personnel have access to sensitive
                            information, and all actions within the platform are
                            logged for transparency.
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
                                    Can I assign and track tasks with Orbit?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}
                            bg={panelBg}
                            borderBottomRadius="md"
                            p={6}
                            color={textColor}
                            fontFamily="var(--font-primary)"
                        >
                            Yes, Orbit provides a task management feature where
                            HR personnel can assign tasks to employees and track
                            their progress. You can monitor deadlines and task
                            statuses to ensure everything runs smoothly.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Box>
    );
}
