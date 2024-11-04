import { Box, Heading, Button } from "@chakra-ui/react";

import Link from "next/link";

export default function NotFound() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Heading as="h1" size="2xl" color="gray.600">
                404 | Not Found
            </Heading>

            <Link href="/">
                <Button bg={"var(--primary-color)"} size="lg" mt={5}>
                    Go Home
                </Button>
            </Link>
        </Box>
    );
}
