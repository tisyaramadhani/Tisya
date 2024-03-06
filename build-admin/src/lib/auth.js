import jwtDecode from 'jwt-decode'

export const checkToken = (params) => {
  if (!params) {
    window.location.replace('http://localhost:3001')
  } else {
    const token = jwtDecode(params)
    if (token.roles_id === 1) {
      window.location.replace('http://localhost:3001/#/admin')
    } else if (token.roles_id === 2) {
      window.location.replace('http://localhost:3001/#/interviewerAccess')
    }
  }
}
