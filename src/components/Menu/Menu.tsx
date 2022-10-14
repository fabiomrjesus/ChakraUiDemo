import { Text, TextProps, VStack } from "@chakra-ui/react";

function MainItem({children, ...props}:TextProps)
{
    return (
        <Text fontWeight="bold" {...props}>
            {children}
        </Text>
    )    
}

function SubItem({children, ...props}:TextProps)
{
    return (
        <Text fontWeight="light" {...props}>
            {children}
        </Text>
    );
}


export default function Menu() 
{
    return (
        <VStack>
            <MainItem>Item 1</MainItem>
            <SubItem>Item 1.1</SubItem>
            <SubItem>Item 1.2</SubItem>
            <MainItem>Item 2</MainItem>
            <SubItem>Item 2.1</SubItem>
            <SubItem>Item 2.2</SubItem>
            <MainItem>Item 3</MainItem>
        </VStack>
    )
}