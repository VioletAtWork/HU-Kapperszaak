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
import { useForm } from "react-hook-form";

const createAccountForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

/*  CONST FUNCTIONS GRABBING ONchange VARIABLE FROM FIELDS */

    const [userfirstName, setUserFirstName] = useState("");
    const [usermiddleName, setUserMiddleName] = useState("");
    const [userlastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

/* THIS CONST FUNCTION IS LINKED WITH THE REGISTATION BUTTON, INFORMATION IS STORED INTO AN OBJECT SO IT CAN BE PULLED INTO THE BACKEND */

        const registerUser = () => {
            Axios.post("http://localhost:3002/api/insert", {
                userFirstName: userfirstName,
                userMiddleName: usermiddleName,
                userLastName: userlastName,
                userEmail: userEmail,
                userPassword: userPassword,
            }).then(() => {
                alert("succesfull insert");
            });

        };

/* CONTAINER OF FORM FIELDS AND REGISTER BUTTON */

        return (
            <Container>
                <form>
                 <label>Voornaam</label>
                    <input 
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })}
                    />
                    {errors?.firstName?.type === "required" && <p>This field is required</p>}
                    {errors?.firstName?.type === "maxLength" && (
                        <p>First name cannot exceed 20 characters</p>
                    )}
                    {errors?.firstName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                    )}

                    <label>Tussenvoegsel</label>
                        <input {...register("middleName", { pattern: /^[A-Za-z]+$/i })} />
                        {errors?.lastName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                    )}

                    <label>Achternaam</label>
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        {errors?.lastName?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                    )}

                    <label>Email address</label>
                    <input type="email" variant="loginform" onChange={(e) => {
                        setUserEmail(e.target.value);
                    } } />
                   
                    <label>Wachtwoord</label>
                    <input variant="loginform" onChange={(e) => {
                        setUserPassword(e.target.value);
                    } } /> 
                    
                    <FormHelperText>We'll never share your details.</FormHelperText>
                </form>

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

                <Button onClick={registerUser}>Registreren</Button>
            </Container>

        );
   }
       
export default createAccountForm