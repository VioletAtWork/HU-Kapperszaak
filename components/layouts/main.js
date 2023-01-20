import Head from 'next/head'
import NavBar from '../navbar'
import {Container} from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Utrecht's HairLab | Premium Haircuts, Microblading and Braiding</title>
            </Head>
            <NavBar path={router.asPath}/>
            <Container/* !!! website max width hier instellen, bijv maxW="container.xl" of maxW="100%" voor hele breedte */ maxW="container.md">
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Main