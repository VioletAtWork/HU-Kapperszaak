import Section from "../components/section";
import {Box, Button, Container, Divider, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import {Product} from "../components/product";

import thumbnailProduct1Placeholder from "../public/images/producten/thumbnailProduct1Placeholder.png";
import thumbnailProduct2Placeholder from "../public/images/producten/thumbnailProduct2Placeholder.png";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Producten = () => (
    <Layout title="Product">
        <Container>
            <Divider my={5} />

            <Heading as="h1">
                Producten
            </Heading>

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