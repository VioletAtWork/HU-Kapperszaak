import Link from 'next/link'
import Image from 'next/image'
import {Box, Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    
    &:hover img {
      transform: rotate(20deg);
    }
`
//test
const Logo = () => {
    const haircutLogo = `/images/haircut${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/" passHref>
            <Image src={haircutLogo} width={20} height={20} alt="logo" />
            {/*<LogoBox
                as="a"
                href="/"
                aria-label="HairLab logo"
                title="HairLab logo"
            >
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    ml={3}
                >
                    HairLab
                </Text>
            </LogoBox>*/}
        </Link>
    )
}

export default Logo