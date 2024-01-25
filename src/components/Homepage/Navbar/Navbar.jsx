import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../Redux/users/user.types';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
  console.log(auth)

  const nav = useNavigate()
  return (
    <>
      <Box zIndex={1000} position={"fixed"}  top={0} w={"100%"} h={"10%"} boxShadow={"rgba(0, 0, 0, 5.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"} bg={"lightgreen"} px={2}>
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} cursor={"pointer"} onClick={()=>{
            nav("/")
          }} color="black" marginTop={"28px"} marginLeft={"3%"}  padding={"8px 12px"} minWidth={"70px"} textAlign={"center"} borderRadius={8} display={auth === true ? "none" : "block"} bg={"yellow"}>Home</Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={5}>
            <Button display={auth==true?"block":"none"}   marginTop={"8%"}  bg={"yellow"}m color={"black"} onClick={()=>{
                    nav("/notes")
                }}>All Notes</Button>
                <Button display={auth==true?"none":"block "} marginTop={"8%"} bg={"yellow"}m color={"black"} onClick={()=>{
                    nav("/register")
                }}>Sign up</Button>
                <Button display={auth==true?"none":"block"} marginTop={"8%"} bg={"yellow"}m color={"black"} onClick={()=>{
                    nav("/login")
                }}>Login</Button>
                <Button bg={"yellow"} marginTop={"8%"} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            
              <Menu>
                <MenuButton marginTop={"8%"}
                  as={Button}
                  border="2px solid yellow"
                  padding={2}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1706153864~exp=1706154464~hmac=9385786fd730b1ab1c22fcc83cc844c744a2da9ec4d50d9a97ea99b302c5ee08'}
                  />
                </MenuButton>
                
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1706153864~exp=1706154464~hmac=9385786fd730b1ab1c22fcc83cc844c744a2da9ec4d50d9a97ea99b302c5ee08'}
                    />
                  </Center>
                  
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  
                 
                   <MenuItem onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}