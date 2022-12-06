import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/griditem'

import thumbnailRotterdam from '../public/images/locaties/thumbnailRotterdam.png'
import thumbnailAmsterdam from '../public/images/locaties/thumbnailAmsterdam.png'

const Locaties = () => (
    <Layout title="Locaties">
        <Container>
            <Divider my={2} />
            <Heading as="h3" fontSize={20} mb={4}>
                Locaties
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="rotterdam"
                        title="Rotterdam"
                        thumbnail={thumbnailRotterdam}>
                        Rotterdam info.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="amsterdam"
                        title="Amsterdam"
                        thumbnail={thumbnailAmsterdam}
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