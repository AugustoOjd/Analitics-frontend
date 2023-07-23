import { Box, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AccountStatsContainer from './accountStats/AccountStatsContainer'
import MovieStatsContainer from './movieStats/MovieStatsContainer'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { RootState } from '@/store/store'
import UserStatsContainer from './usersStats/UserStatsContainer'

function BackOfficeContainer() {
  const {login, user} = useSelector((state:RootState)=> state.auth)
  const router = useRouter()

  const [isCheking, setIsCheking] = useState(true)

  useEffect(() => {
    if(!login) return router.replace('/')
  }, [])

  const checkingUser = ()=>{
    if(user?.role == 'admin'){
      setIsCheking(false)
    }else{
      return router.replace('/')
    }
  }

  useEffect(() => {
    checkingUser()
  }, [])
  
  return (
    <>
    {
      isCheking
      ?
      <Box bg={'white'} h={'700px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Box>
      :
      <Box>
        <AccountStatsContainer/>
        <MovieStatsContainer/>
        <UserStatsContainer/>
      </Box>
    }
    </>

  )
}

export default BackOfficeContainer