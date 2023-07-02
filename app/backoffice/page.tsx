"use client"

import BackOfficeContainer from '@/components/backOffice/BackOfficeContainer'
import NavBarContainerAdmin from '@/components/backOffice/navbar/NavBarContainerAdmin'
import React from 'react'

function BackOfficePage() {
  return (
    <main>
        <NavBarContainerAdmin/>
        <BackOfficeContainer/>
    </main>
  )
}

export default BackOfficePage