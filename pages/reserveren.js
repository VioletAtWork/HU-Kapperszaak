import {Container, Heading, SimpleGrid, Divider, GridItem, Box, Text, Grid, Button} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from "next/link";

const Reserven = () => (
    <Layout title="Reserveren">
        <Container p={2}>
            <Heading as="h1" mb={4}>
                Reserveer nu een afspraak!
            </Heading>
            <Divider my={5} />

            <Section>
                <Heading as="h2" mb={4}>
                    Kies een
                </Heading>
                <Divider my={5} />
            </Section>



            <SimpleGrid columns={[1, 1, 1]} gap={6}>
                {/* Datum */}
                <Section>
                    <Box>
                        <Heading as="h3" mb={4}>
                            Datum
                        </Heading>
                    </Box>
                </Section>

                {/* Tijd */}
                <Section>
                    <Box>
                        <Heading as="h3" mb={4}>
                            Tijd
                        </Heading>
                    </Box>
                </Section>

                {/* Behandeling */}
                <Section>
                    <Heading as="h3" mb={4}>
                        Behandeling
                    </Heading>
                </Section>

                {/* Kapper */}
                <Section>
                    <Heading as="h3" mb={4}>
                        Kapper
                    </Heading>
                </Section>
            </SimpleGrid>

            <Divider my={6} />

            <SimpleGrid columns={[1, 1, 1]} gap={6} align="center">
                <Heading as="h2">
                    Bevestigen...
                </Heading>
                <Text>Datum </Text>
                <Text>Tijd </Text>
                <Text>Behandeling </Text>
                <Text>Bij kapper </Text>
                <NextLink
                    href="/" passHref>
                    <Button
                        colorScheme="teal"
                        variant="outline"
                    >
                        Afspraak bevestigen
                    </Button>
                </NextLink>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Reserven