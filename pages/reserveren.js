import {
    Container,
    Heading,
    Divider,
    Box,
    Text,
    Button,
    LinkOverlay,
    LinkBox, Select, Input, FormControl, FormLabel, useColorModeValue
} from '@chakra-ui/react'
import NextLink from "next/link";
import Image from "next/image";
import thumbnailKapper from "../public/images/haircut-dark.png";
import { MdArrowDropDown } from "react-icons/md";
import KapperDatePicker from "../components/Reserveren/kapperDatePicker";

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
    <Container w="100%" pt={2}>
        <Box
            w="100%"
            h="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            style=
                {{
                    padding: "20px",
                    background: useColorModeValue("rgba(250,88,2,0.1)", "rgba(255,255,255,1)"),
                    color: "#000",
                    width: "100%",
                    maxWidth: "500px",
                    borderRadius: "4px",
                    zIndex: "100"}}
        >


            <Heading as="h1" mb={4}>
                Maak nu een afspraak!
            </Heading>
            <Divider mb={4} />

            {/* Behandeling */}
            <Box >
                <Heading as="h3" mb={4}>
                    Behandeling
                </Heading>
                <Text mb={2}>
                    Voor welke behandeling wilt u een afspraak maken?
                </Text>
                <Select
                    borderColor="black"
                    colorScheme='teal'
                    placeholder="Kies een behandeling"
                    variant="filled"
                    mb={4}
                    bg="rgba(255,255,255,1)"
                >
                    <option value="lang">Lange knipbeurt</option>
                    <option value="kort">Wat van de kantjes</option>
                    <option value="kaal">Alles eraf</option>
                    <option value="razorfade">Razorfade / Opscheer</option>
                </Select>
            </Box>

            <Heading as="h3" mb={4}>
                Datum
            </Heading>
            {/* Datum */}
            <Box style={{
                /*
                                    background: "rgba(255,255,255,0.1)",
                */
                border: "2px solid rgba(0,0,0,1)",
                borderRadius: "4px",
                padding: "20px",
                marginBottom: "20px",
                color: "#000",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "1.5",
                width: "100%",
                zIndex: "100"}}
            >

                <Box
                    mb={4}
                    align={"center"}
                >

                    <Box
                        align="left"
                        style={{
                            padding: "4px",
                            color: "#000",
                            width: "50%",
                            borderRadius: "4px"
                        }}
                    >
                        <KapperDatePicker />
                    </Box>
                </Box>
            </Box>


            {/* Tijd */}
            <Box>
                <Heading as="h3" mb={4}>
                    Tijd
                </Heading>
                <Select
                    icon={<MdArrowDropDown />}
                    borderColor="black"
                    colorScheme='teal'
                    placeholder="Kies een tijdstip"
                    variant="filled"
                    mb={4}
                    bg="rgba(255,255,255,1)"
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


            {/* Locatie */}
            <Box>
                <Heading as="h3" mb={4}>
                    Locatie
                </Heading>
                <Select
                    borderColor="black"
                    colorScheme='teal'
                    placeholder="Kies een locatie"
                    variant="filled"
                    mb={4}
                    bg="rgba(255,255,255,1)"
                >
                    <option value="rotterdam">Rotterdam</option>
                    <option value="amsterdam">Amsterdam</option>
                    <option value="utrecht">Utrecht</option>
                    <option value="denhaag">Den Haag</option>
                </Select>
            </Box>

            {/* Kapper */}
            <Box>
                <Heading as="h3" mb={4}>
                    Kapper
                </Heading>
                <Select
                    icon={<MdArrowDropDown />}
                    borderColor="black"
                    colorScheme='teal'
                    placeholder="Kies een kapper"
                    variant="filled"
                    mb={4}
                    bg="rgba(255,255,255,1)"
                >
                    <option value="marjolein">Marjolein</option>
                    <option value="martijn">Martijn</option>
                    <option value="tina">Tina</option>
                    <option value="martin">Martin</option>
                </Select>
            </Box>

            {/* Persoonsgegevens */}
            <Box>
                <Heading as="h2" fontSize={20} mb={4}>
                    Persoonsgegevens
                </Heading>
                <Box>
                    <FormControl
                        id="voornaam"
                        isRequired>
                        <FormLabel>Voornaam</FormLabel>
                        <Input
                            type="text"
                            placeholder="Voornaam"
                            borderColor="black"
                            border="2px"
                            bg="rgba(255,255,255,1)"
                            textColor={"#000"}
                        />
                    </FormControl>
                    <FormControl
                        id="tussenvoegsel">
                        <FormLabel>Tussenvoegsel</FormLabel>
                        <Input
                            type="text"
                            placeholder="Tussenvoegsel"
                            borderColor="black"
                            border="2px"
                            bg="rgba(255,255,255,1)"
                        />
                    </FormControl>
                    <FormControl
                        id="achternaam"
                        isRequired>
                        <FormLabel>Achternaam</FormLabel>
                        <Input
                            type="text"
                            placeholder="Achternaam"
                            borderColor="black"
                            border="2px"
                            bg="rgba(255,255,255,1)"
                        />
                    </FormControl>
                    <FormControl
                        id="email"
                        isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="email@hotmail.com"
                            borderColor="black"
                            border="2px"
                            bg="rgba(255,255,255,1)"
                        />
                    </FormControl>
                    <FormControl
                        id="telefoonnummer"
                        isRequired>
                        <FormLabel>Telefoonnummer</FormLabel>
                        <Input
                            type="text"
                            placeholder="0611223344"
                            borderColor="black"
                            border="2px"
                            bg="rgba(255,255,255,1)"
                        />
                    </FormControl>
                </Box>
                {/* Afspraak bevestigen */}
                <Box mt={6}>
                    <NextLink
                        href="/" passHref>
                        <Button
                            border="2px solid #000"
                            textColor="#000"
                            bg="rgba(253,173,0,255)"
                            size="lg"
                            w="100%"
                        >
                            Afspraak bevestigen
                        </Button>
                    </NextLink>
                </Box>
            </Box>
        </Box>
    </Container>
)

export default Reserven