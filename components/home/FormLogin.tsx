import React, { useState } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { userApi } from '@/api/usersApi';


  interface IFormInput {
    email:      string;
    password:   string;
  }

function FormLogin() {

  const [loginError, setloginError] = useState('')

  const { register, handleSubmit} = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async data => {
    console.log(data)
    try {
      const resp = await userApi.post('/signin', {email: data.email, password: data.password})
      console.log(resp.data)
      if(resp.data.error){
        setloginError(resp.data.error.description)
      }
    } catch (error:any) {

      // console.log(error.response.data.message)
      setloginError(error.response.data.message)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
      
      <FormLabel>Email address</FormLabel>
      <Input type='email' placeholder='Email' {...register("email", { required: true, maxLength: 20 })} />
      
      <FormLabel>Password</FormLabel>
      <Input type='password' placeholder='Password' {...register("password", {required: true, maxLength:20})}/>

      {
        loginError.length >= 0
        &&
        <FormHelperText>
          <Text fontSize={'xs'} color={'red'}>
            {loginError}
          </Text>
        </FormHelperText>
      }
      
      
      <Button
      mt={4}
      colorScheme='teal'
      type='submit'
      >
          Login
        </Button>
      </FormControl>
    </form>
  )
}

export default FormLogin