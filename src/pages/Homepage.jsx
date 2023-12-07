import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png"
import create from "../assets/create.png"
import pencil from "../assets/pencil.png"


export default function Homepage(){


    return <Box>
      <br/>
      <br/>
      <br/>
      <Image  position={"absolute"} top={150} right={180} w={600} src={note}/>
      <Image  position={"absolute"} top={350} right={40} w={400} src={pencil}/>
       
        <Heading mt={16} textAlign={"start"} size={"4xl"} marginLeft={"3%"}>
        Note Taking App
      </Heading>
      <Text mt={10}  maxW={"50%"}  textAlign={"justify"} marginLeft={"3%"} fontSize={"33"}>
        <br/>
        <h1 >"Welcome to our Note App!</h1>
        </Text>
      
      


      <Text mt={10}  maxW={"50%"} marginLeft={"3%"} fontSize={"33"} >
        A note application is a software program that allows users to create,
        organize, and manage their digital notes.
       </Text>
       <br/>
       <Image  position={"absolute"}  right={1000} w={770} src={create}/>

      
    </Box>
        
  

}