import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useMutation } from 'react-query'
import { putChangePasswordUser } from '../../api/UserApi'
import jwtDecode from 'jwt-decode'
import { CCard, CCardHeader, CContainer } from '@coreui/react'
import { toast } from 'react-toastify'
import { Button, Stack } from '@mui/material'

const DashIntervPage = () => {
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const token = jwtDecode(window.localStorage.getItem('accessToken'))
  let name = token.name
  let email = token.email
  let nik = token.nik

  const [id] = useState(token.id)

  const { mutate: changePasswordUserPut } = useMutation(
    () =>
      putChangePasswordUser(id, {
        password: password,
        confPassword: confPassword,
      }),
    {
      onSuccess: async (data) => {
        alert(data.message)
      },
      onError: (err) => {
        toast.error(err.response.data.message, {
          autoClose: 1500,
        })
      },
    },
  )

  const handleReset = () => {
    // Reset the state values to their initial values or empty strings
    setPassword('')
    setConfPassword('')
  }

  return (
    <div>
      <CContainer style={{ marginTop: '100px', marginBottom: '100px' }}>
        <CCard>
          <CCardHeader className="d-flex justify-content-center">
            <strong>PROFILE</strong>
          </CCardHeader>
          <div className="card-body">
            <div className="tab-content p-3">
              <div className="tab-pane active show" id="profile">
                <div className="tab-pane" id="edit">
                  <form>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Name</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={name} disabled />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">NIK</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="text" value={nik} disabled />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">Email</label>
                      <div className="col-lg-9">
                        <input className="form-control" type="email" value={email} disabled />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        New Password
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label">
                        Confirm password
                      </label>
                      <div className="col-lg-9">
                        <input
                          className="form-control"
                          type="password"
                          value={confPassword}
                          onChange={(e) => setConfPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label form-control-label"></label>
                      <div className="col-lg-9">
                        <Stack spacing={2} direction="row">
                          <Button variant="outlined" onClick={handleReset}>
                            Cancel
                          </Button>
                          <Button
                            variant="contained"
                            value="Change Password"
                            onClick={() => {
                              if (password && confPassword) {
                                // Validasi apakah kedua password telah diisi
                                changePasswordUserPut(id)
                              } else {
                                alert(
                                  'Please fill in both New Password and Confirm Password fields.',
                                )
                              }
                            }}
                          >
                            Save
                          </Button>
                        </Stack>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </CCard>
      </CContainer>
    </div>
  )
}
export default DashIntervPage
