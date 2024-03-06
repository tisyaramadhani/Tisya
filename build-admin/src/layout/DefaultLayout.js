import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { checkToken } from 'src/lib/auth'

const DefaultLayout = () => {
  useEffect(() => {
    window.localStorage.getItem('accessToken')
      ? checkToken(window.localStorage.getItem('accessToken'))
      : window.location.replace('http://localhost:3001')
  }, [])
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
