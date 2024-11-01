"use client";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";

export default function EmployeePaginator() {
    return (
        <Center my={3} fontFamily="var(--primary-font)">
            <ButtonGroup>
                <Button leftIcon={<ArrowBackIcon />}>Previous</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button rightIcon={<ArrowForwardIcon />}>Next</Button>
            </ButtonGroup>
        </Center>
    );
}
