import {Box, Button, Container, Divider, Heading, Image, Link, Text, useColorModeValue} from "@chakra-ui/react";
import Section from "../components/section";
import {ChevronRightIcon} from "@chakra-ui/icons";
import NextLink from "next/link";
import Layout from "../components/layouts/article";

const Page = () => {
    return (
        <Box>
            <Section>
                <Heading
                    as="h1"
                    mb={4}
                    color={useColorModeValue('darkred', 'darkred')}
                    variant="page-title"
                >
                    HairLab
                </Heading>
            </Section>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}

            >
                <Text>Welkom op onze website.</Text>
                <Text>Hier kunt u een afspraak maken bij een van onze locaties.</Text>
                <Text>U kunt een afspraak maken door op de knop hieronder te drukken!</Text>

            </Box>
            <Box my={6} align="center">
                <Heading as="h2" variant="section-title"
                >
                    Maak gauw een afspraak!
                </Heading>
                <NextLink href="/reserveren">
                    <Button
                        colorScheme="red"
                        size="lg"
                        mt={4}
                        rightIcon={<ChevronRightIcon/>}
                    >
                        Reserveren
                    </Button>
                </NextLink>
            </Box>

            <Section delay={0.2}>
                <Box align="center" my={6} gap={6}>
                    <Heading
                        as="h3"
                        fontSize={16}
                        variant="section-title"
                    >
                        Navigeer naar...
                    </Heading>
                    <Box
                        align="center"
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        display={{md: 'flex'}}>
                        <Box flexGrow={1}>
                            <NextLink href="/admin" passHref>
                                <Button colorScheme="red" variant="outline">
                                    Admin
                                </Button>
                            </NextLink>

                            <NextLink href="/druktePagina" passHref>
                                <Button colorScheme="red" variant="outline">
                                    Drukte
                                </Button>
                            </NextLink>

                            <NextLink href="/reserveren" passHref>
                                <Button colorScheme="red" variant="outline">
                                    Reserveren
                                </Button>
                            </NextLink>

                            <NextLink href="/login" passHref>
                                <Button colorScheme="red" variant="outline">
                                    Inloggen
                                </Button>
                            </NextLink>

                            <NextLink href="/locaties" passHref>
                                <Button colorScheme="red" variant="outline">
                                    Locaties
                                </Button>
                            </NextLink>


                            <NextLink href="/producten" passHref>
                                <Button colorScheme="red" variant="outline">
                                    Producten
                                </Button>
                            </NextLink>


                            <NextLink href="/overons" passHref>
                                <Button colorScheme="red" variant="outline">
                                    Over ons</Button>
                            </NextLink>
                        </Box>
                    </Box>
                </Box>
            </Section>

        </Box>
    )
}

export default Page