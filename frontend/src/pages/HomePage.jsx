import React from 'react'
import { Container, VStack, Text, Link as ChakraLink, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {

    const { fetchProducts, products} = useProductStore();
    
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log(products);

    

    return (
        <Container maxW='container.xl' py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    현재 제품들 🚀
                </Text>

                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3
                    }}
                    spacing={10}
                    w={"full"}
                >
                
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}

                </SimpleGrid>

                {products.length === 0 && (

                <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
                    제품을 찾을 수 없습니다. 😥{" "}
                    <Link to={"/create"}>
                        <Text as='span'color='blue.500' _hover={{ textDecoration: "underline"}}>
                            <Link to={"/create"}>제품 추가</Link>
                        </Text>
                    </Link>
                </Text>
                )}
            </VStack>
        </Container>
    );
};
export default HomePage;