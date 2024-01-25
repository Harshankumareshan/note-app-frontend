import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png"
import create from "../assets/create.png"
import pencil from "../assets/pencil.png"


export default function Homepage(){


    return(
      
     <Box  style={{ marginTop: '150px' }}>
      
  
     <Heading  mt={8} textAlign={["start",null, "left"]}  size={"3xl"} marginLeft={["3%"]}>
     Note Taking App
      </Heading>
      <Text mt={10} 
       maxW={["90%", "50%"]} 
       textAlign={["justify", null, "left"]} 
       marginLeft={["3%"]} 
       fontSize={["xl", null, "2xl"]} 
       >
      
        "Welcome to our Note App!
        </Text>
      
      


      <Text 
      mt={10}  
      maxW={["100%", "90%"]} 
      marginLeft={["3%", null]}
      fontSize={["xl", null, "2xl"]} 
      textAlign={["justify", null, "left"]}
      >
        A note application is a software program that allows users to create,
        organize, and manage their digital notes."Streamline your thoughts with our intuitive note-taking app. Capture ideas effortlessly, organize seamlessly, and access them anytime, anywhere. Simplify your life with our user-friendly interface."
       </Text>
     
       <Image  position={"absolute"}  right={[0, null, 1000]} w={["100%", null, 770]} src={create}  style={{ maxWidth: "100%", height: "auto" }}/>

      
    </Box>
        
        )

}