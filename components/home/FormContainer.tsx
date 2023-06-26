import React from 'react'
import FormRegister from './FormRegister'
import CardForm from './CardForm'
import { Box } from '@chakra-ui/react'

function FormContainer() {
  return (
    <Box h={[480,'100%']} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'gray.800'}>
        <CardForm title='Registrarse' navigate='Login'>
            <FormRegister/>
        </CardForm>
    </Box>
  )
}

export default FormContainer