import { Box } from '@chakra-ui/react'
import React from 'react'
import NavBarCardAdmin from './NavBarCardAdmin'

function NavBarContainerAdmin() {
  return (
    <>
    <Box 
    bg='gray.800' 
    w='100%' p={4} 
    color='white' 
    display={['flex']} 
    position={'sticky'} 
    top={0} 
    zIndex={999}
    boxShadow={'md'}
    > 
      <NavBarCardAdmin/>
    </Box>
    </>

  )
}

export default NavBarContainerAdmin