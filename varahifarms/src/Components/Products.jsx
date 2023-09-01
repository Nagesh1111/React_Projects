import React from 'react'
import {Heading,Box,Image,HStack,VStack,Text}from '@chakra-ui/react';
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/MUSTTRY_2.webp';
import img3 from '../Assets/img3.webp';
import img4 from '../Assets/img4.webp';
import img5 from '../Assets/img5.webp';
import img6 from '../Assets/img6.webp';
const Products = () => {
  return (
    <div>
        
        <Heading textAlign={"center"} m={"10"}>All Products</Heading>
        <HStack  justifyContent={"space-around"} flexWrap={"wrap"}>
        <Box m ={"4"}>
            <Image src={img1} boxSize={"400px"} borderRadius={"10"}></Image>
             <VStack>
                <Text fontSize={"xl"} fontWeight={"bold"}>Natural Honey</Text>
                <Text>Price:2500</Text>
             </VStack>
        </Box>
        <Box m ={"4"}>
            <Image src={img2} boxSize={"400px"} borderRadius={"10"}></Image>
             <VStack>
                <Text fontSize={"xl"} fontWeight={"bold"}>Natural Ghee </Text>
                <Text>Price:4050</Text>
             </VStack>
        </Box>
        <Box m ={"4"}>
            <Image src={img3} boxSize={"400px"} borderRadius={"10"}></Image>
             <VStack>
                <Text fontSize={"xl"} fontWeight={"bold"}>Natural Turmeric</Text>
                <Text>Price:200</Text>
             </VStack>
        </Box>
        <Box m ={"4"}>
            <Image src={img4} boxSize={"400px"} borderRadius={"10"}></Image>
             <VStack>
                <Text fontSize={"xl"} fontWeight={"bold"}>Natural Pulses</Text>
                <Text>Price:600</Text>
             </VStack>
        </Box>
        <Box m ={"4"}>
            <Image src={img5} boxSize={"400px"} borderRadius={"10"}></Image>
             <VStack>
                <Text fontSize={"xl"} fontWeight={"bold"}>Natural Red Chilli Powder</Text>
                <Text>Price:400</Text>
             </VStack>
        </Box>
        <Box m ={"4"}>
            <Image src={img6} boxSize={"400px"} borderRadius={"10"}></Image>
             <VStack>
                <Text fontSize={"xl"} fontWeight={"bold"}>Natural Millets</Text>
                <Text>Price:850</Text>
             </VStack>
        </Box>
        
        
    </HStack>
        
    </div>
  )
}

export default Products