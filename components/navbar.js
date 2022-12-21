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
    useColorModeValue, Button, HStack
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import NextLink from 'next/link'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.350', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
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
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem
                        href="/locaties"
                        path={path}
                    >
                        Locaties
                    </LinkItem>

                    <LinkItem
                        href="/overons"
                        path={path}
                    >
                        Over ons
                    </LinkItem>

                    <LinkItem
                        href="/login"
                        path={path}
                    >
                        Inloggen
                    </LinkItem>
                </Stack>

                <HStack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    flex={1}
                    align="right"
                    spacing="24px"
                    mt={{ base: 8, md: 0 }}>
                    <NextLink
                        href="/reserveren"
                        passHref>
                        <Button
                            colorScheme="red"
                        >
                            Reserveren
                        </Button>
                    </NextLink>

                    <ThemeToggleButton />
                </HStack>
            </Container>
        </Box>
    )
}

export default Navbar