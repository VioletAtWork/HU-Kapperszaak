import Image from "next/image";
import {Badge, Box, Heading, Link, LinkBox, LinkOverlay, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {Global} from "@emotion/react";

export const ProductTitle = ({ children }) => (
    <Box>
        <NextLink href="/producten" passHref>
            <Link>Producten</Link>
        </NextLink>
        <span>
      {' '}
            <ChevronRightIcon />{' '}
    </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const ProductImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const ProductMeta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)

export const Product = ({ id, title, imageSrc, children }) => (
    <Box w="100%" textAlign="center">
        <NextLink href={`/products/${id}`} passHref scroll={false}>
            <LinkBox cursor="pointer">
                <Image
                    alt={title}
                    src={imageSrc}
                    className="product-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/products/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const ProductStyle = () => (
    <Global
        styles={`.product-thumbnail {border-radius: 12px;}`}
    />
)