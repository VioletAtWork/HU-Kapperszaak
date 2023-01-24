import Logo from './logo'
import {
    Container,
    Box,
    Flex,
    Button, HStack
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import NextLink from 'next/link'

const Navbar = props => {
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
                </HStack>

                <Flex align="center" ml="auto"
                >
                    <HStack
                    >
                        <NextLink href="/login" passHref>
                            <Button
                                bg="transparent"
                            >
                                Inloggen
                            </Button>
                        </NextLink>

                        <NextLink href="/login" passHref>
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