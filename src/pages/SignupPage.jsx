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
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constents/config";
import { getUser } from "../Redux/users/user.actions";

export default function SignupPage(){
    const nav = useNavigate()
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [name,setName] =useState("")

    const handleSignup =async()=>{
        let data = await axios.post(BASE_URL+"/user/register",{
            name,email,password
        })
        let  {message,status} = data.data
        if(status==1){
            alert(message)
            nav("/login")
        }else{
            alert(message)
        }
    }
   

    return (
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        padding={4}
        w="100%"
      >
        <Image
          w={{ base: "100%", md: "50%" }}
          marginTop={"3%"}
          src={
            "https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=826&t=st=1701936728~exp=1701937328~hmac=250d579b203537b1dac07b3fd5576ffd60cf9e70241ae62c8d8516979670399f"
          }
        />
        <VStack w={{ base: "100%", md: "50%" }} spacing={4} align="stretch">
          <Flex
            minH={{ base: "80vh", md: "100vh" }}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("green.100", "gray.800")}
          >
            <VStack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <VStack align={"center"} spacing={4}>
                <Heading fontSize={"4xl"}>Sign up with Notes App</Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Create Account
                </Text>
              </VStack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
                w={"100%"}
              >
                <VStack spacing={4}>
                  <FormControl id="name">
                    <FormLabel>User Name</FormLabel>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </FormControl>
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
                  <Button
                    onClick={handleSignup}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </Flex>
        </VStack>
        
      </Flex>
    );
  }