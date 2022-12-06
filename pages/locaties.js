import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/griditem'

const Locaties = () => (
    <Layout title="Locaties">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Locaties
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="rotterdam" title="Rotterdam" thumbnail={}>
                        Rotterdam info.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="amsterdam"
                        title="Amsterdam"
                        thumbnail={}
                    >
                        Amsterdam info
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Team
                </Heading>
            </Section>


        </Container>
    </Layout>
)

export default Locaties
export { getServerSideProps } from '../components/chakra'