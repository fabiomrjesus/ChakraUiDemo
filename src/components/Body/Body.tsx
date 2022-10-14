import { Box, BoxProps, HStack, useMediaQuery, VStack } from "@chakra-ui/react";
import Menu from "../Menu/Menu";

export default function Body(props:BoxProps){
    const [isLaptop] = useMediaQuery('(min-width:1200px)')
    return (
        <Box layerStyle="Main" mt="45px" h="calc(100vh - 45px)" overflowY="scroll" {...props}>
            <HStack h="100%" w="100%">
                {isLaptop && <VStack h="100%" w="30%" bg="grey"><Menu/></VStack>}
                <VStack h="100%" w={isLaptop ? "70%":"100%"}>
                    <Box w="100%" h="100%" bg="red"></Box>
                    <Box w="100%" h="100%" bg="green"></Box>
                    <Box w="100%" h="100%" bg="blue"></Box>
                    <Box w="100%" h="100%" bg="red"></Box>
                </VStack>
            </HStack>
        </Box>
    );
}