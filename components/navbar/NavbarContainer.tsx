import { Box } from '@chakra-ui/react'
import React from 'react'
import NormalMenuList from './NormalMenuList'
import BurgerMenuList from './BurgerMenuList'

function NavbarContainer() {

      return (
        <>
        {/* Burger Menu */}
        <Box bg='gray.800' w='100%' p={4} color='white' display={['block', 'block', 'none']}>
          <BurgerMenuList/>
        </Box>

        {/* Normal Menu */}
        <Box bg='gray.800' w='100%' p={4} color='white' display={['none', 'none', 'flex']}>
            <NormalMenuList/>
        </Box>
      </>
  )
}

export default NavbarContainer