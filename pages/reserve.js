import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Reserve = () => (
    <Layout title="Reserveren">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Reserveren
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <Divider my={5} />
                </Section>
                <Section>
                </Section>
            </SimpleGrid>


        </Container>
    </Layout>
)

export default Reserve