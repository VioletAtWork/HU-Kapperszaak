import Section from "../components/section"
import {
    Badge,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Heading,
    Image,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    Text
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import {Product, ProductCard} from "../components/pagecomponents/Producten/product"

import thumbnailProduct1Placeholder from "../public/images/producten/thumbnailProduct1Placeholder.png";
import thumbnailProduct2Placeholder from "../public/images/producten/thumbnailProduct2Placeholder.png";
import NextLink from "next/link";
import {ChevronRightIcon, StarIcon} from "@chakra-ui/icons";
import styled from "@emotion/styled";

const products = [
    {
        id: 1,
        title: "Product 1",
        href: "/producten/product1",
        thumbnail: thumbnailProduct1Placeholder,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu nunc."
    },
    {
        id: 2,
        title: "Product 2",
        href: "/producten/product2",
        thumbnail: thumbnailProduct2Placeholder,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu nunc."
    }
];

const Producten = () => (
    <Layout title="Product" variant="enter">
        <Container>
            <Grid gap={6}>
                <Heading as="h1" variant="section-title">
                    Producten
                </Heading>
                <Heading as="h3" fontSize={15}>
                    Ons assortiment
                </Heading>
                <Text>
                    Tekst over producten.
                </Text>
            </Grid>
            <SimpleGrid columns={[1, 2, 3]} gap={6}>
                <ProductCard href={products[0].href} thumbnail={products[0].thumbnail} title={products[0].title} children={"Test"} />
            </SimpleGrid>

            <Box mt={6}>
                <NextLink href="/producten" passHref>
                    <Button as="a" rightIcon={<ChevronRightIcon />} variant="outline">
                        Bekijk alle producten
                    </Button>
                </NextLink>
            </Box>



            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>

                    {/* Product 1 (dummy/hardcoded!) */}
                    <Product
                        id="product1"
                        title="Uppercut Deluxe Pomade"
                        children={(<Text>Uppercute Deluxe Pomade [this code is @@ /components/product.js]</Text>)}
                        imageSrc={thumbnailProduct1Placeholder}
                    />

                    {/* Product 2 (dummy/hardcoded!) */}
                </Section>
                <Section>
                    <Product
                        id="product2"
                        title="Stay Golden Matte"
                        children={(<Text>Stay Golden Matte [this code is @@ /components/product.js]</Text>)}
                        imageSrc={thumbnailProduct2Placeholder}
                    />
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Need a fresh cut?
                </Heading>
                <Box align="center" my={4}>
                    <NextLink href="/reserve">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline">
                            Book Now
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    </Layout>
)

export default Producten