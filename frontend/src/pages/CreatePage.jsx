import {Box, Container, Heading, Input, VStack, useColorModeValue, Button} from '@chakra-ui/react';
import { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore();
  
  const handleAddProduct = async() => {
    const {success,message} = await createProduct(newProduct)
    console.log("Success:", success);
    console.log("Message", message);
  };

  return(
    <Container maxW={"container.sm"}>
      <VStack spacing = {8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          새제품 등록
        </Heading>

        <Box 
          w={"full"} bg={useColorModeValue("white", "gray.800")}
          p={6} borderRadius={"lg"} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="제품명"
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input
              placeholder="가격"
              name='price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input
              placeholder="이미지 주소"
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />
            <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
              제품 등록하기
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
