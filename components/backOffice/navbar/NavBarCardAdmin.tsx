import { userApi } from '@/api/usersApi'
import { logout } from '@/features/auth/userSlice'
import { Avatar, Box, Button, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'

function NavBarCardAdmin() {

  const router = useRouter()

  const dispatch = useDispatch()

  const logoutAndHome = async ()=>{
    try {
      await userApi.get('/logout')
      dispatch(logout())
  
      return router.replace('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Stack w={'100%'}>
      <HStack w={'100%'} spacing='24px' mb={2}>
        <Box w={['auto']} h='40px'>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </Box>

        <Spacer/>

        <Box w={['auto']} h='40px' >
            <Button 
              colorScheme='blue'
              onClick={()=> logoutAndHome()}
              >Logout
          </Button>
        </Box>
      </HStack>
      
      <HStack
        // bg={'red.800'}
        spacing={['10px', '20px']}
      >
        <Text 
          fontSize={'sm'}
          >
          UserName
        </Text>
        <Text
          fontSize={'sm'}
          >
          Last Conexion 12/02/2023
        </Text>
      </HStack>
    </Stack>

  )
}

export default NavBarCardAdmin