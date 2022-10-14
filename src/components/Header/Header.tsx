import {  BoxProps, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Spacer, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { FaBars, FaTruck } from "react-icons/fa";
import Menu from "../Menu/Menu";

export default function Header(props:BoxProps){
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isLaptop] = useMediaQuery('(min-width:1200px)')
    
    return (
        <HStack layerStyle="Header" h="30px">
            <FaTruck/>
            <Spacer/>
            {!isLaptop && <FaBars onClick={onOpen}/>}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <Menu/>
                    </DrawerBody>
                </DrawerContent>
                
            </Drawer>
        </HStack>
    );
}