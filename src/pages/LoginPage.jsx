import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import {
    
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Redux/users/user.actions";

export default function LoginPage(){
    const nav = useNavigate()
    const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
    console.log(auth,token)
    if(auth){
        nav("/notes")
    }

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const dispatch = useDispatch()

    const handleLogin =()=>{
        dispatch(getUser({email,password}))
    }
   

    return (
      <Flex direction={{ base: "column-reverse", md: "row" }}
      padding={4}
      w="100%">
     
        {/* Image */}
        <Image
          w={{ base: "100%", md: "50%" }}
          marginTop={ "3%"}
          src={
            "https://img.freepik.com/free-vector/secure-data-concept-illustration_114360-2510.jpg?w=740&t=st=1701928096~exp=1701928696~hmac=1d38e7a0eaf4cbecd56f7050df620e5c03c66ddb4817a71478e924486b1c686c"
          }
        ></Image>
     
      <VStack w={{ base: "100%", md: "50%" }}  spacing={4} align="stretch">
        {/* Form */}
        <Flex
          minH={{ base: "80vh", md: "100vh" }}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("green.100", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Login to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                Login <Link color={"blue.400"}></Link>
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
              w="100%"
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    onClick={handleLogin}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
              
              <h1 style={{marginTop:'4%',color:"red",textAlign:'center'}}>DEMO LOGIN Id</h1>
                <h2 style={{marginTop:'4%'}}>Email - user123@gmail.com<h2>Password - 12345</h2></h2>
            </Box>
          </Stack>
        </Flex>
      </VStack>
    </Flex>
  );
}
  