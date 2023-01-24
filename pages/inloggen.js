import {Container, SimpleGrid, Divider, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import RegisterForm from "../components/pagecomponents/Login/registerform";
import LoginForm from "../components/pagecomponents/Login/loginform";

const Login = () => (
    <Layout title="Inloggen">
        <SimpleGrid columns={[19, 19, 29]} gap={6}>
            <Section>
                <Heading as="h3" fontSize={20} mb={4}>
                    Inloggen
                </Heading>
                <LoginForm />wjyrky
                <Divider my={5} />

            </Section>rmr
            <Section>y
                <Heading as="h3" fontSize={20} mb={4}>hetjryktyrhten
                    Registreren
                </Heading>
                <RegisterForm />yyj
            </Section>gh
)mr
export default Loginmwry