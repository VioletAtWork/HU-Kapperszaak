import React from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Heading,
    useToast,
    useColorModeValue,
    Text,
    Flex,
    Radio
} from '@chakra-ui/react'

const WiFiAuth = () => {
    const bgColor = useColorModeValue("#f9f8f7", "#1a202c")
    const textColor = useColorModeValue("#1a202c", "#f9f8f7")
    const accent = useColorModeValue("#ff7f50", "#ff7f50")
    const toast = useToast()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [userType, setUserType] = React.useState("")

    const handleSubmit = () => {
        if (!username || !password) {
            toast({
                title: "Username or Password is Missing",
                description: "Please enter both your username and password.",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        } else {
            // Send the username and password to the server for authentication
            // If the authentication is successful, redirect the user to the desired page
            // If the authentication is unsuccessful, display an error message
        }
    }

    return (
        <Box p={8} mt={6} bg={bgColor} color={textColor}>
            <Heading as="h1" fontFamily="'Amulya', cursive" fontWeight="bold"  fontSize="40px" color={accent}>Kapperszaak  Marjolein WiFi Login</Heading>
            <Text mt={2} fontFamily="'Open Sans', sans-serif" fontWeight="normal" fontSize="20px">Geniet van je tijd bij ons en je nieuwe kapsel.</Text>
            <Stack mt={3} spacing={4}
            >
                <FormControl>
                    <FormLabel fontFamily="'Amulya', cursive" fontWeight="bold" color={accent} htmlFor="username">Gebruikersnaam</FormLabel>
                    <Input
                        id="username"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        fontFamily="'Amulya', cursive"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel fontFamily="'Amulya', cursive" fontWeight="bold" color={accent} htmlFor="password">Wachtwoord</FormLabel>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel
                        fontFamily="'Supreme', cursive"
                        fontWeight="bold"
                        color={accent}
                    >
                        Select User Type
                    </FormLabel>
                        <Flex
                            fontFamily="'Synonym', cursive"
                        >
                            <Box w={"full"} textAlign={"center"} as="label" mr={4} display='block' rounded='lg' p={4} bg={userType === "Medewerker" ? accent : "gray.200"} _hover={{ bg: accent }}>
                                <Radio
                                    id="Medewerker"
                                    name="userType"
                                    value="Medewerker"
                                    onChange={e => setUserType(e.target.value)}
                                    isChecked={userType === "Medewerker"}
                                    fontFamily="'Supreme', cursive"
                                />
                                Medewerker
                            </Box>
                            <Box w={"full"} textAlign={"center"} as="label" display='block' rounded='lg' p={4} bg={userType === "Gast" ? accent : "gray.200"} _hover={{ bg: accent }}>
                                <Radio
                                    id="Gast"
                                    name="userType"
                                    value="Gast"
                                    onChange={e => setUserType(e.target.value)}
                                    fontFamily="'Supreme', cursive"
                                    isChecked={userType === "Gast"}
                                />
                                Gast
                            </Box>
                        </Flex>
                </FormControl>
                <Button fontFamily="'Synonym', cursive" fontWeight="bold" bg={accent} color={textColor} onClick={handleSubmit}>Indienen</Button>
            </Stack>
        </Box>
    )
}

export default WiFiAuth
