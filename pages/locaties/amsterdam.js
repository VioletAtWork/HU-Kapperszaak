import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/locatie'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Locatie = () => (
    <Layout title="Amsterdam">
        <Container>
            <Title>
                Amsterdam
                <Badge>2016-</Badge>
            </Title>

            <P>
                Placeholder tekst
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                </ListItem>

                <ListItem>
                    <Meta>Address</Meta>
                    <span>Jan van der Heidenstraat 12</span>
                </ListItem>

            </List>
        </Container>
    </Layout>
)

export default Locatie
export { getServerSideProps } from '../../components/chakra'