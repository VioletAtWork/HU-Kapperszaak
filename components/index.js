import {Box, Button, Container, Divider, Heading, Image, Link, Text, useColorModeValue} from "@chakra-ui/react";
import Section from "../components/section";
import {ChevronRightIcon} from "@chakra-ui/icons";
import NextLink from "next/link";

const Page = () => {
    return (
        <Container>
            <Divider my={5} />

            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Welkom bij HairLab
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        HairLab
                    </Heading>
                </Box>
            </Box>

            <Section delay={0.1}>
               
                <Box align="center" my={4}>
                    <NextLink href="/locaties">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline">
                            Locatiess
                        </Button>
                    </NextLink>
                </Box>
            </Section>

        </Container>
    )
}

export default Page