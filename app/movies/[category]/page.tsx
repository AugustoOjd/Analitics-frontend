'use client';

import CategoryContainer from '@/components/category/CategoryContainer'
import NavbarContainer from '@/components/navbar/NavbarContainer'
import {useParams} from 'next/navigation'
import React from 'react'


function CategoryPage() {
  
  const params = useParams()
  console.log(params)
  return (
    <>
    <NavbarContainer/>
    <CategoryContainer category={params}/>
    </>
  )
}

export default CategoryPage