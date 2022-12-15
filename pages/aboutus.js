import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Aboutus = () => (
    <Layout title="Team">
        <Container>
            <Heading as="h1" fontSize={20} mb={4}>
                Over ons
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

export default Aboutus