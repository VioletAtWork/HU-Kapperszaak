import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
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
    const { reset } = useForm(); 

<<<<<<< HEAD:components/registerform.js
/* THIS CONST FUNCTION IS LINKED WITH THE REGISTRATION BUTTON, INFORMATION IS STORED INTO AN OBJECT SO IT CAN BE PULLED INTO THE BACKEND */
=======
/* CONST FOR EMAIL VALIDATION */
>>>>>>> Development:components/pagecomponents/Login/registerform.js

    const [emailCheck, setEmailCheck] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [emailAlreadyExist, setEmailAlreadyExist] = useState("");
    const [registrationSucces, setRegistrationSucces] = useState("");

/* FUNCTION THAT IS CALLED WHEN U CLICK ON REGISTRATION WITH FORMAT CHECK ON THE EMAIL-ADRESS */

        const userRegistration = () => {
            const regExP = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/g

        if (regExP.test(emailCheck)) { // CHECKS EMAIL FORMAT

                Axios.post("http://localhost:3001/register", {
                userFirstName: userfirstName,
                userMiddleName: usermiddleName,
                userLastName: userlastName,
                userEmail: userEmail,
                userPassword: userPassword,
<<<<<<< HEAD:components/registerform.js
            }).then(() => {
                console.log("Succesfull");
                reset();
            });
=======
            }).then((response) => {

                if (response.data.registrationFailur) {
                    setEmailAlreadyExist(response.data.registrationFailur) // MESSAGE DISPLAYED WHEN EMAIL ADRESS ALREADY EXISTS IN THE DATABASE
                } else {
                    setRegistrationSucces(response.data.registrationSuccesfull) // MESSAGE DISPLAYED WHEN DATABASE INSERTION HAS BEEN COMPLETED
                }
            });
            

        } else if (!regExP.test(emailCheck) && emailCheck !== "") {
                setEmailMessage ("Invalid Email"); // MESSAGE DISPLAYED WHEN EMAIL FORMAT IS WRONG
          
            } else {
                setEmailMessage ("This field is mandatory"); // MESSAGE DISPLAYED WHEN FIELD IS EMPTY      
            }
>>>>>>> Development:components/pagecomponents/Login/registerform.js
        };
        
/* CONTAINER OF FORM FIELDS AND REGISTER BUTTON */
        

      /* useEffect(() => {
            if (!isAdding) {
                formRef.current?.reset();
            }


        }, [isAdding]);*/
        
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
                    <input type="email" variant="loginform" onChange={(e) => {
                        setUserEmail(e.target.value);
                        setEmailCheck(e.target.value);                        
                    } } />

                    <p>{emailMessage}</p>
                    <p>{emailAlreadyExist}</p>

                    <FormLabel>Wachtwoord</FormLabel>
                    <input type="password" 
                    variant="loginform" onChange={(e) => {
                        setUserPassword(e.target.value);
                    } } /> 
                    
                    <FormHelperText>We'll never share your details.</FormHelperText>
                </FormControl>
                

<<<<<<< HEAD:components/registerform.js

                <Button onClick=
                   {registrateUser}
                   >Registreren</Button>
=======
                <Button onClick={() => {
                    userRegistration ();
                }}>Registreren</Button>

                <p>{registrationSucces}</p>
                
>>>>>>> Development:components/pagecomponents/Login/registerform.js
            </Container>

        );
    };
     
export default RegisterForm


<<<<<<< HEAD:components/registerform.js
=======
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
>>>>>>> Development:components/pagecomponents/Login/registerform.js
