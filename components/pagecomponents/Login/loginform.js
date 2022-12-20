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

const LoginForm = () => {
    return (
        <Container>
            <FormControl>
                <FormLabel>
                    Email address
                </FormLabel>
                <Input type="email" variant="loginform" />

                <FormLabel>
                    Wachtwoord
                </FormLabel>
                <Input variant="loginform" />
                <FormHelperText>
                    Wachtwoord vergeten?
                </FormHelperText>
            </FormControl>

            <Button>Inloggen</Button>
        </Container>
    )
}

export default LoginForm