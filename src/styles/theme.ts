import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

//COMPONENTS
const Button:ComponentStyleConfig = {
    baseStyle:{},
    sizes:{},
    variants:{
       generalButton:{
        bg:"green",
        _hover:{
            bg:"yellow"
        }
       } 
    },
    defaultProps:{
        
    }

};

//LAYERS
const Header = {
    w:"90%",
    mx:"5%",
    mt:"15px",
    borderBottom:"solid 1px #ffffff33",
    zIndex:2,
    position:"fixed"    
};

const Background = {
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
    position:"fixed",
    zIndex:1
}

const Main = {
    zIndex: 2,
    position:"absolute",
    width:"100%"
}


const theme = extendTheme({
    styles:{},
    layerStyles: {Background, Header, Main},
    components:{
        Button
    },
    colors:{
        navy:"rgba(32,42,68,1)",
        goldenrod:"rgba(218,165,32,1)",
        black50:"rgba(0,0,0,0.5)"
    }
});

export default theme;