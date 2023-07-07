
import React, { useState } from 'react'
import { Box, Button, FormHelperText, Input, Text } from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
  } from '@chakra-ui/react'
import { userApi } from '@/api/usersApi';

  type Inputs = {
    firstName:    string
    email:        string
    password:     string

    exampleRequired: string,
  };

function FormRegister() {

  const [emailError, setEmailError] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const resp = await userApi.post('/signup', {firstName:data.firstName, email: data.email, password: data.password})
      console.log(resp.data)
    } catch (error:any) {
      setEmailError(error.response.data.message)
      // console.log(error.response.data.errors[0])
    }
    
    // userApi.post('/signup', {data})
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  return (
    <>

    <form onSubmit={handleSubmit(onSubmit)} >
        <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input placeholder='Nombre' id='firstName' {...register("firstName", {required: true, minLength: 3, maxLength:15, pattern: /^[A-Za-z]+$/i})}/>
            
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Email' id='email' {...register("email", {required: true, minLength: 3, maxLength:20})} />
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='Password' id='password' {...register("password", {required: true, minLength: 6, maxLength:15})}/>
            
            
              {errors.firstName 
              && 
              <FormHelperText>
                <Text  fontSize={'xs'} color={'red'}>
                  Nombre min 3 caracteres y max 15
                </Text>
              </FormHelperText>
              }
              {
                errors.password
                &&
                <FormHelperText>
                <Text fontSize={'xs'} color={'red'}>
                  Password al menos 6 caracteres
                </Text>
              </FormHelperText>
              }
              {
                emailError.length > 0
                &&
                <FormHelperText>
                  <Text fontSize={'xs'} color={'red'}>
                    Ya existe ese correo electronico
                  </Text>
                </FormHelperText>
              }


            <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Registrarse
          </Button>
        </FormControl>
    </form>

    </>
  )
}

export default FormRegister