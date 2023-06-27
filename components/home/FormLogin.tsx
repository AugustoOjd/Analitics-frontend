import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

function FormLogin() {
  return (
    <FormControl isRequired>
    <FormLabel>Email address</FormLabel>
    <Input type='email' placeholder='Email' />
    <FormLabel>Password</FormLabel>
    <Input type='password' placeholder='Password'/>
    <FormHelperText>Algun error del form.</FormHelperText>
    <Button
    mt={4}
    colorScheme='teal'
    type='submit'
  >
    Login
  </Button>
</FormControl>
  )
}

export default FormLogin