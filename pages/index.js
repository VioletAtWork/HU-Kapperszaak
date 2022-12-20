import {Box, Button, Container, Divider, Heading, Image, Link, Text, useColorModeValue} from "@chakra-ui/react";
import Section from "../components/section";
import {ChevronRightIcon} from "@chakra-ui/icons";
import NextLink from "next/link";

const Page = () => {
    return (
        <Container>
            <Section delay={0.2}>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    css={{ backdropFilter: 'blur(10px)' }}
                >
                    Welkom bij HairLab
                </Box>
            </Section>

            <Section delay={0.9}>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            HairLab
                        </Heading>
                    </Box>
                </Box>

                <Heading as="h2" variant="section-title">Afspraak maken</Heading>
                <Box my={6} align="center">
                    <NextLink href="/reserveren" passHref>
                        <Button colorScheme="teal">Reserveren</Button>
                    </NextLink>
                </Box>
            </Section>

            <Divider />

            <Section delay={1.3}>
                <Heading as="h3">
                    Navigeer naar:
                </Heading>
                <Box align="center" my={6} gap={6}>

                    <Box w="100%">
                        <NextLink href="/admin" passHref>
                            <Button colorScheme="teal" variant="outline">Admin</Button>
                        </NextLink>

                        <NextLink href="/druktePagina" passHref>
                            <Button colorScheme="teal" variant="outline">Drukte Pagina</Button>
                        </NextLink>

                        <NextLink href="/reserveren" passHref>
                            <Button colorScheme="teal" variant="outline">Reserveren</Button>
                        </NextLink>

                        <NextLink href="/login" passHref>
                            <Button colorScheme="teal" variant="outline">Inloggen</Button>
                        </NextLink>
                    </Box>

                    <Box w="100%">
                        <NextLink href="/locaties" passHref>
                            <Button colorScheme="teal" variant="outline">Locaties</Button>
                        </NextLink>


                        <NextLink href="/producten" passHref>
                            <Button colorScheme="teal" variant="outline">Producten</Button>
                        </NextLink>


                        <NextLink href="/overons" passHref>
                            <Button colorScheme="teal" variant="outline">Over ons</Button>
                        </NextLink>
                    </Box>




                </Box>
            </Section>

        </Container>
    )
}

export default Page