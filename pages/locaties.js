import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { LocatieGridItem } from '../components/griditem'
import
    thumbnailRotterdam from
        '../public/images/locaties/thumbnailRotterdam.png'
import
    thumbnailAmsterdam from
        '../public/images/locaties/thumbnailAmsterdam.png'
import Drukte from "../components/drukte";

const Locaties = () => (
    <Layout title="Locaties">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Locaties
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <LocatieGridItem
                        id="rotterdam"
                        title="Rotterdam"
                        thumbnail={thumbnailRotterdam}>
                        Rotterdam info.
                    </LocatieGridItem>
                </Section>
                <Section>
                    <LocatieGridItem
                        id="amsterdam"
                        title="Amsterdam"
                        thumbnail={thumbnailAmsterdam}
                    >
                        Amsterdam info
                    </LocatieGridItem>
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