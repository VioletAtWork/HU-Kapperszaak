import {Container, SimpleGrid, Divider, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import RegisterForm from "../components/registerform";
import LoginForm from "../components/loginform";

const Login = () => (
    <Layout title="Login">
        <Container>
            <Divider my={2} />

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Inloggen
                    </Heading>
                    <LoginForm />
                    <Divider my={5} />

                </Section>
                <Section>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Registreren
                    </Heading>
                    <RegisterForm />
                    <Divider my={5} />
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Login