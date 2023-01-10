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

/*  CONST FOR INPUT GRABBING TO BACKEND */

    const [userfirstName, setUserFirstName] = useState("");
    const [usermiddleName, setUserMiddleName] = useState("");
    const [userlastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

/* CONST FOR EMAIL VALIDATION */

    const [emailCheck, setEmailCheck] = useState("");
    const [emailMessage, setEmailMessage] = useState("");

/* FUNCTION THAT IS CALLED WHEN U CLICK ON REGISTRATION WITH FORMAT CHECK ON THE EMAIL-ADRESS */

        const userRegistration = () => {
            const regEx = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/g

        if (regEx.test(emailCheck)){

            Axios.post("http://localhost:3001/register", {
                userFirstName: userfirstName,
                userMiddleName: usermiddleName,
                userLastName: userlastName,
                userEmail: userEmail,
                userPassword: userPassword,
            }).then(() => {
                console.log("Succesfull");
            });
        
        } else if (!regEx.test(emailCheck) && emailCheck !== "") {
                setEmailMessage ("Invalid Email"); // MESSAGE GOING BACK TO FE WHEN EMAIL FORMAT IS INCORRECT
          
            } else {
                setEmailMessage ("");           
            }
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
                        setEmailCheck(e.target.value);                        
                    } } />

                    <h5>{emailMessage}</h5>
                   
                    <FormLabel>Wachtwoord</FormLabel>
                    <Input variant="loginform" onChange={(e) => {
                        setUserPassword(e.target.value);
                    } } /> 
                    
                    <FormHelperText>We'll never share your details.</FormHelperText>
                </FormControl>

                <Button onClick={() => {
                    userRegistration ();
                }}>Registreren</Button>
            </Container>

        );
    };
     
export default RegisterForm


