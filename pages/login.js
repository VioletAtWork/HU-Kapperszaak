import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Login = () => (
    <Layout title="Team">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Inloggen
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <Divider my={5} />
                    <Heading>
                        Registreren
                    </Heading>
                </Section>
                <Section>

                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Login