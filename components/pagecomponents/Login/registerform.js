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
} from '@chakra-ui/react';
import Axios from 'axios';

const RegisterForm = () => {

/*  CONST FUNCTIONS GRABBING ONchange VARIABLE FROM FIELDS */

    const [userfirstName, setUserFirstName] = useState("");
    const [usermiddleName, setUserMiddleName] = useState("");
    const [userlastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

/* THIS CONST FUNCTION IS LINKED WITH THE REGISTATION BUTTON, INFORMATION IS STORED INTO AN OBJECT SO IT CAN BE PULLED INTO THE BACKEND */

        const registrateUser = () => {
            Axios.post("http://localhost:3001/register", {
                userFirstName: userfirstName,
                userMiddleName: usermiddleName,
                userLastName: userlastName,
                userEmail: userEmail,
                userPassword: userPassword,
            }).then(() => {
                console.log("Succesfull");
            });
        };

/* CONTAINER OF FORM FIELDS AND REGISTER BUTTON */

        return (
            <Container>
                <FormControl>
                    <FormLabel>Voornaam</FormLabel>
                    <Input variant="loginform" onChange={(e) => {
                        setUserFirstName(e.target.value);
                    } } />

                    <FormLabel>Tussenvoegsel</FormLabel>
                    <Input variant="loginform" onChange={(e) => {
                        setUserMiddleName(e.target.value);
                    } } />

                    <FormLabel>Achternaam</FormLabel>
                    <Input variant="loginform" onChange={(e) => {
                        setUserLastName(e.target.value);
                    } } />

                    <FormLabel>Email address</FormLabel>
                    <Input type="email" variant="loginform" onChange={(e) => {
                        setUserEmail(e.target.value);
                    } } />
                   
                    <FormLabel>Wachtwoord</FormLabel>
                    <Input variant="loginform" onChange={(e) => {
                        setUserPassword(e.target.value);
                    } } /> 
                    
                    <FormHelperText>We'll never share your details.</FormHelperText>
                </FormControl>

                <Button onClick={registrateUser}>Registreren</Button>
            </Container>

        );
   }
       
export default RegisterForm


/* REGISTERFORM MAAR MOET NOG GECLEARED WORDEN*/

/*import React from 'react'
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

export default RegisterForm */