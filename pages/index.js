import {Box, Heading, Text, useColorModeValue} from "@chakra-ui/react";

const Page = () => {
    return (
        <Box
        >
            <Box className="hero-title"
                 p={10}
            >
                <Heading
                    as="h1"
                    color={useColorModeValue('black', 'whiteAlpha.950')}
                    variant="page-title"
                    fontSize={64}
                    mb={4}
                >
                    HairLab
                </Heading>
            </Box>

            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                <Text>Welkom op onze website.</Text>
                <Text>Hier kunt u een afspraak maken bij een van onze locaties.</Text>
                <Text>U kunt een afspraak maken door op de knop hieronder te drukken!</Text>

            </Box>

        </Box>
    )
}

export default Page