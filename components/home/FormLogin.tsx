import React, { useEffect, useState } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  // api
import { userApi } from '@/api/usersApi';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { login } from '@/features/auth/userSlice';
import { IUser } from '@/interface/IUser';
// navigate
import { useRouter } from 'next/navigation'


  interface IFormInput {
    email:      string;
    password:   string;
  }

function FormLogin() {

  const [loginError, setloginError] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const router = useRouter()

  const user = useSelector((state:RootState)=> state.auth.user)
  const dispatch = useDispatch()

  const { register, handleSubmit} = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async data => {
    try {
      setIsLogin(true)
      
      setTimeout(() => {
        setIsLogin(false)
      }, 5000);

      const resp = await userApi.post('/signin', {email: data.email, password: data.password})
      if(resp.data.error){
        return setloginError(resp.data.error.description)
      }
      console.log('response',resp.data.payload)
      const {firstName, lastName, age, email, role, status, type, wallet }:IUser = resp.data.payload

      dispatch(login({firstName, lastName, age, email, role, status, type, wallet}))

    } catch (error:any) {

      setIsLogin(false)
      setloginError(error.response.data.message)
    }
  };

  useEffect(() => {
    setIsLogin(false)
  }, [loginError])
  
  useEffect(() => {
    if(user && user != null) return router.push('/dashboard')
  }, [user])
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
      
      <FormLabel>Email address</FormLabel>
      <Input type='email' id='email' placeholder='Email' {...register("email", { required: true, maxLength: 20 })} />
      
      <FormLabel>Password</FormLabel>
      <Input type='password' id='password'  placeholder='Password' {...register("password", {required: true, maxLength:20})}/>

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
      isLoading={isLogin? true : false}
      variant={isLogin ? 'outline': 'solid'}
      loadingText='Loging...'
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