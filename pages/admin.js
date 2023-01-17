import {Box, Button, Container, Heading, SimpleGrid, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

const Admin = () => (
    <Layout title="Admin">
        <Box
            borderRadius="lg"
            mb={6}
            p={3}
            my={1}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
        >
            <Heading as="h1" mb={4}
                     color={useColorModeValue('darkred', 'darkred')}>
                Admin Dashboard
            </Heading>
            <Text>
                Welkom bij het HairLab Admin dashboard.
            </Text>

            <SimpleGrid columns={[1, 3, 2]} padding={6} mb={4} spacing={10}>
                <Stack>
                    <Heading as="h2" fontSize={20}>
                        Locaties
                    </Heading>
                    <Button>
                        Wijzigen
                    </Button>
                </Stack>

                <Stack>
                    <Heading as="h2" fontSize={20}>
                        Producten
                    </Heading>
                    <Button>
                        Wijzigen
                    </Button>
                </Stack>

                <Stack>
                    <Heading as="h2" fontSize={20}>
                        Reservering tijdstippen
                    </Heading>
                    <Button>
                        Wijzigen
                    </Button>
                </Stack>

                <Stack>
                    <Heading as="h2" fontSize={20}>
                        Afspraak-types
                    </Heading>
                    <Button>
                        Wijzigen
                    </Button>
                </Stack>

                <Stack>
                    <Heading as="h2" fontSize={20}>
                        Afspraken
                    </Heading>
                    <Button>
                        Toevoegen
                    </Button>
                    <Button>
                        Wijzigen
                    </Button>
                    <Button>
                        Verwijderen
                    </Button>
                </Stack>

                <Stack>
                    <Heading as="h2" fontSize={20}>
                        Kappers
                    </Heading>
                    <Button>
                        Personeel wijzigen
                    </Button>
                    <Button>
                        Personeel toevoegen
                    </Button>
                </Stack>



                <Stack>
                    <Heading as="h2" fontSize={20}>
                        Over ons
                    </Heading>
                    <Button>
                        Pagina wijzigen
                    </Button>
                </Stack>




            </SimpleGrid>
        </Box>
    </Layout>

)

export default Admin