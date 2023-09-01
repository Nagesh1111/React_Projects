import React from 'react';
import {Link} from 'react-router-dom';
import{Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerHeader,Stack,Button,useDisclosure,DrawerOverlay,DrawerContent,VStack,Text} from '@chakra-ui/react';
    import {BiMenuAltLeft,BiSearch,BiCartAlt } from 'react-icons/bi';
    

    function Header (){

    const {isOpen,onOpen,onClose} = useDisclosure();

        return (<>
            <Stack bgColor={"yellow.400"}
              h = {"20vh"}>
                <Text alignSelf={"center"} marginTop={"14"} fontSize={"25"} fontWeight={"bold"} >Varahi Farms</Text>
            <Button pos={"absolute"}
                    top={"12"}
                    left={"5"}
                    bgColor = {"lightgoldenrodyellow"}
                    color = {"black"}
                    zIndex = {'overlay'}
                    onClick={onOpen}
                    >
            <BiMenuAltLeft  size={"25"} />
            </Button>
            <Button  pos = {"absolute"} top={"12"} right = {"20"} marginRight = {"5"}> <BiSearch size={"20"}></BiSearch></Button>
            <Button  pos = {"absolute"} top={"12"} right = {"10"}> <BiCartAlt size={"20"}></BiCartAlt></Button>
            </Stack>
            <Drawer isOpen ={isOpen} placement={'left'} onClose = {onClose} >
              <DrawerOverlay/>
              <DrawerContent>
              <DrawerCloseButton placement = {"left"}/>
              <DrawerBody>
              <VStack margin={"20"}>
              <Button onClick={onClose}>
               <Link to ='/home'>Home</Link>
               </Button>
              <Button onClick={onClose}>
              <Link to ='/products'>Shop Products</Link>
              </Button>
              <Button onClick={onClose}>
              <Link to ='/faq'>FAQ</Link>            </Button>
              <Button onClick={onClose}>
              Contact              </Button>
              <Button onClick={onClose}>
              About us             </Button>
              <Button onClick={onClose}>
              Track Your Order
              </Button>
            
              </VStack>
              </DrawerBody>
              </DrawerContent>
              
            </Drawer>
            </>
        );
    }
    export default Header;