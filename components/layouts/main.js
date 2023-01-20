import Head from 'next/head'
import NavBar from '../navbar'
import {Box, Container} from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Kapperszaak HairLab - Homepage</title>
            </Head>
            <NavBar
            path={router.asPath}
            />

            <Container
                /* !!! website max width hier instellen, bijv maxW="container.xl" of maxW="100%" voor hele breedte */
                maxW="container.md"
            >
                {children}

                <Footer />

            </Container>
        </Box>

    )
}

export default Main