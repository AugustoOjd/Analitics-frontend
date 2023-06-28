"use client"

import NavbarContainer from '@/components/navbar/NavbarContainer'
import DashboardContainer from '@/components/userDashboard/DashboardContainer'
import React from 'react'

function DashboardPage() {
  return (
    <main>
      <NavbarContainer/>
      <DashboardContainer/>
    </main>
  )
}

export default DashboardPage