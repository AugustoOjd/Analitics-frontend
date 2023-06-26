import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

function FormRegister() {
  return (
        <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input placeholder='Nombre' />
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Email' />
            <FormLabel>Email address</FormLabel>
            <Input type='password' placeholder='Password'/>
            <FormHelperText>Algun error del form.</FormHelperText>
            <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
        </FormControl>
  )
}

export default FormRegister