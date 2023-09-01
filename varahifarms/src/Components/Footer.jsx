import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input,HStack,VStack,Text
  } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div><HStack m={'10'} bgColor={"yellow.500"} borderRadius={"10"} h={"500px"} justifyContent={"space-between"} p={"20"}>
    <VStack m={"5"} justifyContent={"flex-start"} p={"20"}>

        <Text fontSize ={"3xl"} fontWeight={"bold"} letterSpacing={"2"} m={"3"}>Sign up to our Newsletter</Text>
        <FormControl>
         <FormLabel>Email address</FormLabel>
           <Input type='email' placeholder='Enter Your Email' />
        </FormControl>

    </VStack>
    <VStack mr={"20"}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>CustomerCare</Text>
        <Text>FAQ</Text>
        <Text>Shiping Policy</Text>
        <Text>Refund Policy</Text>
        <Text>Cancellation Policy</Text>
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
        <Text>Contact Information</Text>
    </VStack>
    <VStack  mr={"20"} justifyContent={"space-between"}>
    <Text fontSize={"2xl"} fontWeight={"bold"}>CustomerCare</Text>
        <Text>FAQ</Text>
        <Text>Shiping Policy</Text>
        <Text>Refund Policy</Text>
        <Text>Cancellation Policy</Text>
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
        <Text>Contact Information</Text>
    </VStack>
   </HStack></div>
  )
}

export default Footer