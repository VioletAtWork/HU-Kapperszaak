import {
    Container,
    Badge,
    List,
    ListItem, Divider,
} from '@chakra-ui/react'
import {ProductTitle, ProductMeta} from '../../components/pagecomponents/Producten/product'
import Layout from '../../components/layouts/article'
import P from "../../components/paragraph"

const Product = () => (
    <Layout title="Product1">
        <Container>
            <Divider my={5} />
            <ProductTitle>
                Uppercut Deluxe Pomade <Badge>bijna uitverkocht!</Badge>
            </ProductTitle>
            <P>
                Beschrijving over dit product. lorem ipsum, bekijk je reservering op de pagina, page. Zie onderstaande.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <ProductMeta>Price (EUR)</ProductMeta>
                    <span>EUR 23,39,-</span>
                </ListItem>

                <ListItem>
                    <ProductMeta>Nog een waarde?</ProductMeta>
                    <span>(Almost Out Of Stock. Order Now!)</span>
                </ListItem>
            </List>

        </Container>
    </Layout>
)

export default Product
export { getServerSideProps } from '../../components/chakra'