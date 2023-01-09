import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#efe5db', "rgba(0,36,154,0.1)")(props)
        },
    })
}

const components = {
    Button: {
        variants: {
            'left-btn': {

            }
        }
    },
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c')(props),
            textUnderlineOffset: 3
        })
    },
    Input: {
        variants: {
            'loginform': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                border: '1px solid',
                borderColor: 'blackAlpha.500'
            }
        }
    },
    ProductCard: {
        variants: {
            'mannenproduct': {
                textDecoration: 'none',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                border: '1px solid',
                borderColor: 'blackAlpha.500'
            },
            'vrouwenproduct': {
                textDecoration: 'none',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                border: '1px solid',
                borderColor: 'blackAlpha.500'
            }
        }

    }
}

const fonts = {
    heading: "'Supreme', sans-serif",
    text: "'Chubbo, sans-serif",
    badge: "'Synonym, sans-serif",
    description: "'Amulya', sans-serif"
}

const colors = {
    glassTeal: 'rgba(0, 255, 255, 0.2)',
}


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts,
})

export default theme