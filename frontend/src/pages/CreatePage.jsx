import {Box, Container, Heading, Input, VStack, useColorModeValue, Button, useToast} from '@chakra-ui/react';
import { useState } from 'react';
import { useProductStore } from '../store/product';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore();
  
  const handleAddProduct = async() => {
    if (!newProduct.name || !newProduct.price) {
      toast({
        title: '입력 오류',
        description: '제품명과 가격은 필수 입력 항목입니다.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const {success, message} = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message", message);
    
    if (success) {
      toast({
        title: '등록 성공',
        description: '제품이 성공적으로 등록되었습니다.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      // 홈페이지로 리디렉션
      navigate('/');
    } else {
      toast({
        title: '등록 실패',
        description: message || '제품 등록 중 오류가 발생했습니다.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
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
