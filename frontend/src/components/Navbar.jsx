import React from 'react';
import { Container, Box, Button, Flex, HStack, Text, useColorMode, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import { useProductStore } from '../store/product';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { products } = useProductStore();

    return (
        <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.100", "gray.900")}>
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    <Link to={"/"}> FullStack Project 🚀🛒</Link>
                    <Text 
                        as="span" 
                        fontSize={{ base: "16", sm: "18" }} 
                        fontWeight="medium" 
                        ml={3}
                        display="inline-block"
                        border="1px solid"
                        borderColor={useColorModeValue("gray.300", "gray.600")}
                        px={2}
                        py={1}
                        borderRadius="md"
                    >
                        <ChakraLink 
                            href="https://github.com/kimternet/fullstackproject"
                            isExternal
                            textDecoration="underline"
                            _hover={{ color: "blue.500" }}
                         >
                            📂 GitHub 소스코드
                         </ChakraLink>
                    </Text>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon fontSize={20} />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;