'use client'
import React, { useState } from 'react'
import FormRegister from './FormRegister'
import CardForm from './CardForm'
import { Box, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import FormLogin from './FormLogin'

function FormContainer() {

  const [signup, setSignup] = useState(true)

  return (
    <Box h={[500,'100%']} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'gray.800'}>
        <CardForm title={signup ? 'Registrarse' : 'Login'}
          changeForm={            
              <Button
                mt={4}
                rightIcon={<ArrowForwardIcon />}
                colorScheme='teal'
                type='submit'
                onClick={()=> setSignup(!signup)}
                >
                {signup ? 'Login' : 'Registrarse'}
            </Button>}>

              {
                signup
                ?
                ''
                // <FormRegister/>
                :
                <FormLogin/>
              }
        </CardForm>
    </Box>
  )
}

export default FormContainer