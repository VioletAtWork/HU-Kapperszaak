import Logo from './logo'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue, Button, HStack, VStack
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import NextLink from 'next/link'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('#000', '#fff')
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? useColorModeValue("#000", '#ffd') : inactiveColor}
                style={active ? { fontWeight: 'bold' } : undefined}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
            m={6}
            /* !!! Master container van Navbar !!! */
            as="nav"
            css={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
        }}
            {...props}
        >
            <Container as={Flex} maxW="container.xl" align="center" >

                {/*<Box
                    align="center"
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    display={{md: 'flex'}}>
                    <Box flexGrow={1}>

                        <NextLink href="/locaties" passHref>
                            <Button colorScheme="red" variant="outline"
                                    style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                            >
                                Locaties
                            </Button>
                        </NextLink>

                        <NextLink href="/overons" passHref>
                            <Button colorScheme="red" variant="outline"
                                    style={{borderRadius: 0}}
                            >
                                Over ons</Button>
                        </NextLink>

                        <NextLink href="/reserveren" passHref>
                            <Button colorScheme="red" variant="outline"
                                    style={{borderRadius: 0}}
                            >
                                Reserveren
                            </Button>
                        </NextLink>

                        <NextLink href="/inloggen" passHref>
                            <Button colorScheme="red" variant="outline"
                                    style={{borderRadius: 0}}
                            >
                                Inloggen
                            </Button>
                        </NextLink>

                        <NextLink href="/producten" passHref>
                            <Button colorScheme="red" variant="outline"
                                    style={{borderRadius: 0}}
                            >
                                Producten
                            </Button>
                        </NextLink>

                        <NextLink href="/druktePagina" passHref>
                            <Button colorScheme="red" variant="outline"
                                    style={{borderRadius: 0}}
                            >
                                Drukte
                            </Button>
                        </NextLink>

                        <NextLink href="/admin" passHref>
                            <Button colorScheme="red" variant="outline"
                                    style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                            >
                                Admin
                            </Button>
                        </NextLink>
                    </Box>
                </Box>*/}


                <Flex mr={4}>
                    <Logo />
                </Flex>


                <HStack h="100%" as="nav" align="center" ml={10}>
                    <NextLink
                        href="/reserveren"
                        passHref>
                        <Button
                            bg="transparent"
                        >
                            Een afspraak maken
                        </Button>
                    </NextLink>
                    <NextLink href="/locaties" passHref>
                        <Button
                            bg="transparent"
                        >
                            Locaties
                        </Button>
                    </NextLink>
                    <NextLink href="/overons" passHref>
                        <Button
                            bg="transparent"
                        >
                            Over ons
                        </Button>
                    </NextLink>


                </HStack>

                <Flex align="center" ml="auto"
                >
                    <HStack
                    >
                        <NextLink href="/inloggen" passHref> 
                        {/* Als je dit veranderd naar /inloggen dan werkt deze niet meer. */}
                            <Button
                                bg="transparent"
                            >
                                Inloggen
                            </Button>
                        </NextLink>
                        <NextLink href="/inloggen" passHref>
                             {/* Als je dit veranderd naar /inloggen dan werkt deze niet meer. */}
                            <Button
                                bg="transparent"
                            >
                                Registreren
                            </Button>
                        </NextLink>

                        <ThemeToggleButton />
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar