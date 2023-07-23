import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

interface Props {
    userId:     number
    firstName:  string
    email:      string
    age:        string
    status:     boolean
    wallet:     number
    type:       string
}

function TbodyCard({userId, firstName, email, age, status, wallet, type}:Props) {
  return (
        <Tr>
            <Td>{userId}</Td>
            <Td >{firstName}</Td>
            <Td >{email}</Td>
            <Td >{age == null ? 'null' : age}</Td>
            <Td >{status == true ? 'Active' : 'Ban'}</Td>
            <Td >{type}</Td>
            <Td isNumeric>{wallet}</Td>
        </Tr>

  )
}

export default TbodyCard