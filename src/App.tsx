import {
  ChakraProvider,
} from "@chakra-ui/react"
import './styles/styles.css'
import theme from './styles/theme'
import Header from "./components/Header/Header"
import Body from "./components/Body/Body"
import Footer from "./components/Footer/Footer"



export const App = () => {

  return (  
    <ChakraProvider theme={theme}>
      <Header/>
      <Body/>
      <Footer/>
    </ChakraProvider>
  );
}

