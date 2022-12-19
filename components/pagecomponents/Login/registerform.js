import React from 'react'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input,
    Button, Container
} from '@chakra-ui/react'

const RegisterForm = () => {
    return (
        <Container>
            <FormControl>
                <FormLabel>Voornaam</FormLabel>
                <Input variant="loginform" />

                <FormLabel>Tussenvoegsel</FormLabel>
                <Input variant="loginform" />

                <FormLabel>Achternaam</FormLabel>
                <Input variant="loginform" />

                <FormLabel>Email address</FormLabel>
                <Input type="email" variant="loginform" />
                <FormHelperText>We'll never share your email.</FormHelperText>

                <FormLabel>Wachtwoord</FormLabel>
                <Input variant="loginform" />
            </FormControl>

            <Button>Registreren</Button>
        </Container>

    )
}

export default RegisterForm