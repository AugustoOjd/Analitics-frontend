'use client'

import React, { useEffect } from 'react'
import ImageBg from './ImageBg'
import FormContainer from './FormContainer'
import { Box, Stack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { RootState } from '@/store/store'

function HomeContainer() {

  const login = useSelector((state:RootState)=> state.auth.login)
  const router = useRouter()

  const validateLogin = async ()=>{
    await login
    if(login) return router.push('/dasboard')
  }

  useEffect(() => {
    validateLogin()
  }, [])
  
  return (
        <Stack direction={['column', 'row']} w={'100%'} h={[800, 650, 700, 800]} spacing={0}>
          <Box w={['100%', '45%']} h={[300, 650, 700, 800]}>
            <ImageBg/>
          </Box>
          <Box w={['100%', '55%']} h={[500, 650, 700, 800]} >
            <FormContainer/>
          </Box>
        </Stack>
  )
}

export default HomeContainer