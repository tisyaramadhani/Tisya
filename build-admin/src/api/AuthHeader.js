export const AuthHeader = () => {
  const user = window.localStorage.getItem('accessToken')
  if (user) {
    return { Authorization: `Bearer ${user}` }
  } else {
    return {}
  }
}

export const AuthHeaderForm = () => {
  const user = window.localStorage.getItem('accessToken')
  if (user) {
    return { Authorization: `Bearer ${user}`, 'Content-Type': 'multipart/form-data' }
  } else {
    return {}
  }
}
