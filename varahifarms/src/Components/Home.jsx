import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import Marquee from 'react-fast-marquee';
import {Box,Image,VStack,Text,HStack,Stack,Heading,Button,RadioGroup,Radio,Input} from '@chakra-ui/react';
import b1 from '../Assets/b2.webp';
import b2 from '../Assets/b1.webp';
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/MUSTTRY_2.webp';
import img3 from '../Assets/img3.webp';
import img4 from '../Assets/img4.webp';
import img5 from '../Assets/img5.webp';
import img6 from '../Assets/img6.webp';
import img7 from '../Assets/cowstanding.webp';
import img8 from '../Assets/img8.webp';
import img9 from '../Assets/img9.webp';
import img10 from '../Assets/img10.webp';
import img11 from '../Assets/img11.webp';
import img12 from '../Assets/aboutimg.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {RiStarSFill} from 'react-icons/ri';
import {FcShipped} from 'react-icons/fc';
import {AiOutlineStar} from 'react-icons/ai';
const Home = () => {
  return (
    <div>
  <VStack>

  <Carousel autoPlay infiniteLoop interval={3000} showStatus = {false} showThumbs = {false} showArrows = {false} >
      <Image src = {b1}></Image><Image src = {b2}></Image></Carousel>

      <Text fontSize={"4xl"} alignSelf={"flex-start"} m={"2"} fontWeight={"bold"} p={"10"}>Go Natural,Go Healthy</Text>
  </VStack>
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
    <Stack>
        <Box pos={"relative"} m={"10"} >
        <Image borderRadius ={"15"} w={"full"} objectFit={"cover"} src = {img7}></Image>
        <Heading pos={"absolute"} top = {"58%"} left={"15%"} color={"blackAlpha.800"}>We are The One-stop Destination For a Wide Range of Organic Foods</Heading>
        </Box>
    
    </Stack>
    <HStack >
        <Box display={"flex"} justifyContent={"cennter"} flexDirection={"column"} alignItems={"center"} padding = {"10"}>
            <Image bgColor={"darkgreen"} padding={"5"} borderRadius={"50%"} boxSize={"100px"}   src ={img8}></Image>
            <Heading m = {"4"}fontSize={"2xl"}>Farm-to-Table Freshness</Heading>
            <Text letterSpacing={"2"}  >Enjoy the vibrant flavors and superior quality of food that has been carefully harvested and brought straight to your doorstep</Text>
        </Box>
        <Box display={"flex"} justifyContent={"cennter"} flexDirection={"column"} alignItems={"center"} padding = {"10"}>
            <Image bgColor={"darkgreen"}  padding={"5"}  borderRadius={"50%"} boxSize={"100px"}   src ={img9}></Image>
            <Heading  m = {"4"} fontSize={"2xl"}>Pure and Clean Ingredients</Heading>
            <Text letterSpacing={"2"}>Enjoy the peace of mind that comes from consuming food free from harmful chemicals, pesticides, and artificial additives.</Text>
        </Box>
        <Box display={"flex"} justifyContent={"cennter"} flexDirection={"column"} alignItems={"center"} padding = {"10"}>
            <Image bgColor={"darkgreen"} padding={"5"}  borderRadius={"50%"} boxSize={"100px"}   src ={img10}></Image>
            <Heading  m = {"4"} fontSize={"2xl"}>Nutritional Excellence</Heading>
            <Text letterSpacing={"2"}>Our Products are packed with essential nutrients, vitamins, and minerals, providing customers with optimal nutrition.</Text>
        </Box>
    </HStack>
    <VStack bgColor={"yellow.500"} p={"20"} letterSpacing={"4"}>
        <Heading  color={"red.600"}>Problems With Modern Farming</Heading>

        <Tabs align='center' p={"10"}>
            <TabList >
                <Tab fontWeight={"bold"} >
                    Synthetic Pesticides
                </Tab>
                <Tab fontWeight={"bold"}>
                    Chemical Fertilizers
                </Tab>
                <Tab fontWeight={"bold"}>
                    Genetically Modified Organisms
                </Tab >
                <Tab fontWeight={"bold"}>
                    Environmental Impact
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                Conventional farming relies on the use of synthetic pesticides, which are chemical substances specifically designed to kill or control pests that can damage crops. These pesticides are typically derived from artificial compounds and can have negative impacts on the environment, including soil degradation, water pollution, and harm to beneficial insects and wildlife.
                </TabPanel>
                <TabPanel>
                These fertilizers are typically manufactured using synthetic compounds and are designed to deliver specific nutrients to crops. However, the overuse or improper application of chemical fertilizers can lead to soil degradation, nutrient imbalances, and water contamination.
                </TabPanel>
                <TabPanel>
                GMOs are living organisms whose genetic material has been altered through genetic engineering techniques. This manipulation is often done to introduce desirable traits such as pest resistance or increased yield. However, GMOs can raise concerns related to biodiversity, food safety, and environmental impacts.
                </TabPanel>
                <TabPanel>
                Conventional farming practices can have a significant environmental impact. The use of synthetic pesticides and chemical fertilizers can contaminate soil, water bodies, and air, affecting biodiversity and ecosystem health.
                </TabPanel>
            </TabPanels>
        </Tabs>
    </VStack>

    <HStack m={"20"}>
        <Image src={img11} borderRadius={"20"}></Image>
        <VStack  w={"100%"} h={"100%"} >
            <Heading m = {"5"} alignSelf={"flex-start"}>Natural Turmeric</Heading>
            <HStack ml={"5"} alignSelf={"flex-start"}>
                <Text mr={"5"}>Rs.250</Text> <Button variant={"solid"} colorScheme={"blue"}>Soldout</Button></HStack>
            <HStack ml={"5"} alignSelf={"flex-start"}>
                <Text mr={"5"}>Rating 5.0</Text>
                <RiStarSFill/></HStack>
                <RadioGroup alignSelf={"flex-start"}>
                    <Button mr={"2"}><Radio>1/4kg</Radio></Button>
                    <Button  mr={"2"}><Radio>1/2kg</Radio></Button>
                    <Button><Radio>1kg</Radio></Button>
                </RadioGroup>
                <Button display={"flex"} justifyContent={"flex-start"} p={"10"} w={"full"}  m={"3"}>
                    <FcShipped  m={"10"}size={"60px"}/>
                    <Text>Free Shipping</Text></Button>
                    <Button variant={"solid"} colorScheme={"green"} w={"full"}>BuyNow</Button>
        </VStack>
    </HStack>
    <Marquee speed={"150"} p={"100px"}>
       <Text fontSize={"6xl"} fontWeight={"bold"} mr={"20"}> Go Healthy Go Natural.</Text>
       <Text fontSize={"6xl"} fontWeight={"bold"} mr={"20"}> Go Healthy Go Natural.</Text>
       <Text fontSize={"6xl"} fontWeight={"bold"} mr={"20"}> Go Healthy Go Natural.</Text>
       <Text fontSize={"6xl"} fontWeight={"bold"} mr={"20"}> Go Healthy Go Natural.</Text>
    </Marquee>
    <VStack mt={"20"}>
        <Text fontSize={"2xl"}>Reviews</Text>
    <HStack justifyContent={"center"} mt={"2"}>
        <AiOutlineStar color='gold' />
        <AiOutlineStar color='gold'/>
        <AiOutlineStar color='gold'/>
        <AiOutlineStar color='gold'/>
        <AiOutlineStar color='gold'/>
    </HStack>
    </VStack>
    

    <Carousel mt={"20"} autoPlay infiniteLoop interval={3000} showStatus = {false} showThumbs = {false} showArrows = {false}>
        <Text fontSize={"6xl"}>Great</Text>
        <Text fontSize={"6xl"}>Thanks</Text>
        <Text fontSize={"6xl"}>hi </Text>
        <Text fontSize={"6xl"}>Everyone</Text>
    </Carousel>
   <VStack m={"10"} >
    <Text fontSize={"6xl"} fontWeight={"bold"}>Aboutus</Text>
     <HStack  width={"full"}>
        <Image p ={"1"}boxSize={"50%"}  borderRadius={"10"} src ={img12}></Image>
        <VStack bgColor={"yellow.500"} h={"100%"} m={"10"} borderRadius={"10"}>
            
            <Text letterSpacing={"2"} m={"10"}>Welcome to Vaaradhi Farms! We are Vamshi and Nethra, who are passionate about healthy living and sustainable food practices.</Text>
            <Text letterSpacing={"2"} m={"10"}>We're passionate about what we do, and we're committed to making a positive impact on the world through our business. We hope that you'll join us on this journey towards healthy living and sustainable food practices</Text>
            <Text letterSpacing={"2"} m={"10"}>Thank you for choosing our organic food products, and we look forward to serving you soon..</Text>
        </VStack>
     </HStack>
   </VStack>

   
        
    </div>
  )
}

export default Home