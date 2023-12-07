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
      <Box zIndex={1000} position={"fixed"}  top={0} w={"100%"} h={"10%"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"} bg={"lightgreen"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} cursor={"pointer"} onClick={()=>{
            nav("/")
          }} color="black"  padding={"2"} width={"7%"} textAlign={"center"} marginLeft={"10%"} marginTop={"9"} borderRadius={8} display={auth==true?"none":"block "} bg={"yellow"}m >Home</Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={10}>
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
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
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