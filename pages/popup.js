import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import {useState} from "react";

function WiFiAuthPopup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Make your API call to authenticate the user's WiFi credentials here
    }

    return (
        <Box maxWidth="sm" margin="auto">

            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormControl>
                <Button mt={4} type="submit">
                    Connect
                </Button>
            </form>
        </Box>
    );
}

export default WiFiAuthPopup