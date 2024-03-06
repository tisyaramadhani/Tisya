import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query'
import { signin } from 'src/api/UserApi'
import { checkToken } from 'src/lib/auth'
import { toast } from 'react-toastify'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Login = () => {
  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken')

    if (accessToken) {
      checkToken(accessToken)
    }
  }, [])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setLoading(true)
      signinPost()
    }
  }

  // signin
  const { mutate: signinPost } = useMutation(
    () =>
      signin({
        email: email,
        password: password,
      }),
    {
      onSuccess: async (data) => {
        setLoading(false)
        if (data && data.token && data.refreshtoken) {
          const { token, refreshtoken } = data
          window.localStorage.setItem('accessToken', data.token)
          window.localStorage.setItem('refreshToken', data.refreshtoken)
          checkToken(token, refreshtoken)
        } else {
          // Handle the case where the response structure is unexpected
          console.error('Invalid response structure:', data)
        }
      },
      onError: (err) => {
        setLoading(false)
        toast.error(err.response.data.message, {
          autoClose: 1500,
        })
      },
    },
  )

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit">IS Development</Link>
      </Typography>
    )
  }

  const defaultTheme = createTheme()

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" marginBottom={'50px'}>
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              labelPlacement="end"
            />
            <Button
              onClick={() => {
                setLoading(true)
                signinPost()
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? 'LOADING...' : 'Sign In'}
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Login
