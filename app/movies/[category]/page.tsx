'use client';

import CategoryContainer from '@/components/category/CategoryContainer'
import NavbarContainer from '@/components/navbar/NavbarContainer'
import {useParams} from 'next/navigation'
import React from 'react'


function CategoryPage() {
  
  const {category} = useParams()
  console.log(category)
  return (
    <>
    <NavbarContainer/>
    <CategoryContainer category={category}/>
    </>
  )
}

export default CategoryPage