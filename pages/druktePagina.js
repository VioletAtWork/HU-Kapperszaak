import {Container, Heading, SimpleGrid, Divider, Text} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Drukte from "../components/drukte";

const DruktePagina = () => (
    <Layout title="Drukte">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Drukte Page
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>

                    <Text>Stuk 1</Text>

                    <Drukte />
                </Section>
            </SimpleGrid>


        </Container>
    </Layout>
)

export default DruktePagina