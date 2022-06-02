import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Flex, Spacer, Box, Button, Text } from '@chakra-ui/react'

const Navbar = () => {

  const {isAuthorized, setisAuthorized} = useContext(AuthContext);

  return (
    <div>
        <Flex w="80%" m="auto" h="60px" mt="10px" bg="yellow.400" rounded="15px" p="0px 25px" align="center" fontSize="2xl" as="b">
          <Text>Amazon</Text>
          <Spacer/>
          <Button size="md" rounded="30px" p="5px 20px" fontSize="lg" onClick={()=> {
            if(isAuthorized) {
              setisAuthorized(false);
            } else {
              setisAuthorized(true);
            }
          }}>{isAuthorized? "LogOut" : "LogIn" }</Button>
        </Flex>
    </div>
  )
}

export default Navbar