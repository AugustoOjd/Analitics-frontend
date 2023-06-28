import { Box } from '@chakra-ui/react'
import React from 'react'
import NormalMenuList from './NormalMenuList'
import BurgerMenuList from './BurgerMenuList'

function NavbarContainer() {

      return (
        <>
        {/* Burger Menu */}
        <Box 
        bg='gray.800' 
        w='100%' 
        p={4} 
        color='white' 
        display={['block', 'block', 'none']} 
        position={'sticky'} 
        top={0} 
        zIndex={999} 
        boxShadow={'md'}
        >
          <BurgerMenuList/>
        </Box>

        {/* Normal Menu */}
        <Box 
        bg='gray.800' 
        w='100%' p={4} 
        color='white' 
        display={['none', 'none', 'flex']} 
        position={'sticky'} 
        top={0} 
        zIndex={999}
        boxShadow={'md'}
        >
            <NormalMenuList/>
        </Box>
      </>
  )
}

export default NavbarContainer