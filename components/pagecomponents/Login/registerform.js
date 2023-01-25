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
// import PasswordChecklist from "react-password-checklist";

const RegisterForm = () => {

/*  CONST FOR INPUT GRABBING TO BACKEND */

    const [userfirstName, setUserFirstName] = useState("");
    const [usermiddleName, setUserMiddleName] = useState("");
    const [userlastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const { reset } = useForm(); 

/* CONST FOR EMAIL VALIDATION */

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
        };
        
/* CONTAINER OF FORM FIELDS AND REGISTER BUTTON */
        

      /* useEffect(() => {
            if (!isAdding) {
                formRef.current?.reset();
            }


        }, [isAdding]);*/
        
        //ResetForm gebeuren, ja spaghetti I know xD
        function resetForm(){
            document.getElementById("registratieFormulier").value = "";
        }

        function resetForm1(){
            document.getElementById("registratieFormulier1").value = "";
        }

        function resetForm2(){
            document.getElementById("registratieFormulier2").value = "";
        }

        function resetForm3(){
            document.getElementById("registratieFormulier3").value = "";
        }

        function resetForm4(){
            document.getElementById("registratieFormulier4").value = "";
        }

        
        //Alles samenvoegen
        function waitAsec(){
            setTimeout(redirection, 5000)
        }

        function redirection(){
            document.location.href="/" 
        }


        function CheckFormBeforeSending(){
            if (document.getElementById("registratieFormulier4").value != ("")) 
            
            {resetForm(); resetForm1(); resetForm2(); resetForm3(); resetForm4();
            
            // setTimeout
            waitAsec();
            
            //Successvol ingelogd
            }
        }


        return (
            <Container>
                <FormControl id="registratieFormulier">
                    <FormLabel>Voornaam</FormLabel>
                    <Input variant="loginform" onChange={(e) => {
                        setUserFirstName(e.target.value);
                    } } />
                </FormControl>

                <FormControl id="registratieFormulier1">
                    <FormLabel >Tussenvoegsel</FormLabel>
                    <Input variant="loginform" onChange={(e) => {
                        setUserMiddleName(e.target.value);
                    } } />
                </FormControl>   

                
                <FormControl id="registratieFormulier2">
                    <FormLabel>Achternaam</FormLabel>
                    <Input variant="loginform" onChange={(e) => {
                        setUserLastName(e.target.value);
                    } } />
                </FormControl>

                <FormControl id="registratieFormulier3"> 
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" variant="loginform" onChange={(e) => {
                        setUserEmail(e.target.value);
                        setEmailCheck(e.target.value);                        
                    } } />

                    <p>{emailMessage}</p>
                    <p>{emailAlreadyExist}</p>

                </FormControl>

                <FormControl id="registratieFormulier4">
                    <FormLabel>Wachtwoord</FormLabel>
                    <Input type="password" 
                    variant="loginform" onChange={(e) => {
                        setUserPassword(e.target.value);
                    } } /> 

                {/* <PasswordChecklist  PASSWORD CHECKING
                rules={["minLength","specialChar","number","capital"]}
                minLength={5}
                value={UserPassword}

                messages={{minLength: "Password is longer than 8 characters.",
                    specialChar: "Password has special characters.",
                    number: "The password has a number.",
                   capital: "The password has a capital letter.",
                    match: "Passwords matches!",
                }}
                /> */}
                

                <FormHelperText>
                    We'll never share your details.
                </FormHelperText>
                </FormControl>
                

                <Button onClick={() => {CheckFormBeforeSending();
                
                userRegistration();
                }}>Registreren</Button>

                <p>{registrationSucces}</p>
                
            </Container>

        );
    };
     
export default RegisterForm