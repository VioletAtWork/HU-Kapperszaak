import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const Admin = () => (
    <Layout title="Admin">
        <Container>
            <Heading as="h1" fontSize={20} mb={4}>
                Dashboard
            </Heading>

            <SimpleGrid>

            </SimpleGrid>
        </Container>

    </Layout>

)

export default Admin