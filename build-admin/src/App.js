import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { QueryClient, QueryClientProvider } from 'react-query'

// initialize the client
const queryClient = new QueryClient()

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Login Interviewer
const Login = React.lazy(() => import('./views/login/Login.js'))

// Pages
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route exact path="/" name="Login" element={<Login />} />
              <Route exact path="/register" name="Register Page" element={<Register />} />
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              <Route path="*" name="Home" element={<DefaultLayout />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </QueryClientProvider>
    )
  }
}

export default App
