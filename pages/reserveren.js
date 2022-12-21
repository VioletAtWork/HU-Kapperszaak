import {
    Container,
    Heading,
    SimpleGrid,
    Divider,
    GridItem,
    Box,
    Text,
    Grid,
    Button,
    LinkOverlay,
    LinkBox, Select
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from "next/link";
import Image from "next/image";
import thumbnailKapper from "../public/images/haircut-dark.png";
import { MdArrowDropDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import KapperDatePicker from "../components/kapperDatePicker";

export const Kapper = ({ naamKapper, children }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                alt={naamKapper}
                className="kapper-thumbnail"
                loading="lazy"
                src={thumbnailKapper}
            />
            <LinkOverlay target="_blank">
                <Text mt={2}>{naamKapper}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const Behandeling = ({ naamBehandeling, children }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                alt={naamBehandeling}
                className="kapper-thumbnail"
                loading="lazy"
                src={thumbnailKapper}
            />
            <LinkOverlay target="_blank">
                <Text mt={2}>{naamBehandeling}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

const Reserven = () => (
    <Layout title="Reserveren">
        <Container p={2}>
            <Heading as="h1" mb={4}>
                Maak nu een afspraak!
            </Heading>
            <Divider my={5} />
            <Box position="relative" h="100vh">
                <Box style={{ padding: "16px", background: "#edf2f7", color: "#000" }}>
                    {/* Datum */}
                    <Box mb={4}>
                        <Heading as="h3" mb={4}>
                            Datum
                        </Heading>
                        <KapperDatePicker />
                    </Box>

                    {/* Tijd */}
                    <Box>
                        <Heading as="h3" mb={4}>
                            Tijd
                        </Heading>
                        <Select
                            icon={<MdArrowDropDown />}
                            bg="teal.400"
                            colorScheme='teal'
                            placeholder="(Selecteer een tijd)"
                            variant="filled"
                            mb={4}
                            color="#fff"
                        >
                            <option value="10u">10:00</option>
                            <option value="11u">11:00</option>
                            <option value="12u">12:00</option>
                            <option value="13u">13:00</option>
                            <option value="14u">14:00</option>
                            <option value="15u">15:00</option>
                            <option value="16u">16:00</option>
                            <option value="17u">17:00</option>
                        </Select>
                    </Box>

                    {/* Behandeling */}
                    <Box>
                        <Heading as="h3" mb={4}>
                            Behandeling
                        </Heading>
                        <Select
                            bg="teal.400"
                            colorScheme='teal'
                            placeholder="(Selecteer een behandeling)"
                            variant="filled"
                            mb={4}
                            color="#fff"
                        >
                            <option value="lang">Lange knipbeurt</option>
                            <option value="kort">Wat van de kantjes</option>
                            <option value="kaal">Alles eraf</option>
                            <option value="razorfade">Razorfade / Opscheer</option>
                        </Select>
                    </Box>

                    {/* Kapper */}
                    <Box>
                        <Heading as="h3" mb={4}>
                            Kapper
                        </Heading>
                        <Select
                            icon={<MdArrowDropDown />}
                            bg="teal.400"
                            colorScheme='teal'
                            placeholder="(Kies een kapper)"
                            variant="filled"
                            mb={4}
                            color="#fff"
                        >
                            <option value="marjolein">Marjolein</option>
                            <option value="martijn">Martijn</option>
                            <option value="tina">Tina</option>
                            <option value="martin">Martin</option>
                        </Select>
                        <SimpleGrid columns={[1, 1, 6]}>
                            <Kapper naam={"Marjolein"} children={<Text>Tekst over kapper</Text>} />
                            <Kapper naam={"Martijn"} children={<Text>Tekst over kapper</Text>} />
                            <Kapper naam={"Tina"} children={<Text>Tekst over kapper</Text>} />
                            <Kapper naam={"Martin"} children={<Text>Tekst over kapper</Text>} />
                        </SimpleGrid>
                    </Box>
                </Box>

                {/* Afspraak bevestigen */}
                <NextLink
                    href="/" passHref>
                    <Button
                        colorScheme="teal"
                        variant="solid"
                        size="lg"
                        w="100%"

                    >
                        Afspraak bevestigen
                    </Button>
                </NextLink>
            </Box>

            <Divider my={6} />

            <SimpleGrid columns={[1, 1, 1]} gap={6} align="center">
                <Heading as="h2">
                    Bevestigen...
                </Heading>
                <Text>Datum </Text>
                <Text>Tijd </Text>
                <Text>Behandeling </Text>
                <Text>Bij kapper </Text>

            </SimpleGrid>
        </Container>
    </Layout>
)

export default Reserven