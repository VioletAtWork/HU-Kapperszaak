import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container
            p={2}
            maxW="container.lg"
            wrap="wrap"
            align="center"
        >
            <Divider my={5} />
            <Heading as="h1">Pagina niet gevonden</Heading>
            <Divider my={2} />
            <Text>De pagina waar je naar zocht bestaat niet (meer).</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="teal">Naar startpagina</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound