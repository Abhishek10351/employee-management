
import { Box, Heading } from "@chakra-ui/react";

export default function NotFound() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Heading as="h1" size="2xl" color="gray.600">
                404 | Not Found
            </Heading>
        </Box>
    );
}