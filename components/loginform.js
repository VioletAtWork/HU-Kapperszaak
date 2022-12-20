import React, { useState, useEffect } from 'react'
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
import Axios from 'axios';

const LoginForm = () => {

    const [loginemail, setLoginEmail] = useState("");
    const [loginpassword, setLoginPassword] = useState("");


        const loginUser = () => {
            Axios.post("http://localhost:3002/userlogin", {
                loginEmail: loginemail,
                loginPassword: loginpassword,
            }).then((response) => {
              console.log(response);
            });
        };

    return (
        <Container>
            <FormControl>
                
                <FormLabel>
                    Email address
                </FormLabel>
                <Input type="email" variant="loginform" onChange={(e) => {
                        setLoginEmail(e.target.value);
                    } } />

                <FormLabel>
                    Wachtwoord
                </FormLabel>
                <Input variant="loginform" onChange={(e) => {
                        setLoginPassword(e.target.value);
                    } } />
                <FormHelperText>
                    Wachtwoord vergeten?
                </FormHelperText>
            </FormControl>

            <Button onClick={loginUser}>Inloggen</Button>
        </Container>
    )
}

export default LoginForm