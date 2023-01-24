import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { LocatieGridItem } from '../components/griditem'
import
    thumbnailRotterdam from
        '../public/images/locaties/thumbnailRotterdam.png'
import
    thumbnailAmsterdam from
        '../public/images/locaties/thumbnailAmsterdam.png'

const Locaties = () => (
    <Layout title="Locaties">
        <Container my={2}>
            <Heading as="h3" fontSize={20} mb={4}>
                Locaties
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <LocatieGridItem
                        id="rotterdam"
                        title="Rotterdam"
                        thumbnail={thumbnailRotterdam}
                        children=""
                    />
                </Section>
                <Section>
                    <LocatieGridItem
                        id="amsterdam"
                        title="Amsterdam"
                        thumbnail={thumbnailAmsterdam}
                    />
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Locaties
export { getServerSideProps } from '../components/chakra'