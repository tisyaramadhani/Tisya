import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilColorBorder } from '@coreui/icons'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { getProfileCompany, putProfileCompany } from 'src/api/ProfileCompanyApi'
import { useQuery, useMutation } from 'react-query'
import parse from 'html-react-parser'
import { toast } from 'react-toastify'
import { Button, Stack } from '@mui/material'
import { TableInfo } from 'src/views/widgets/InfoTable'

const About = () => {
  const [visibleUpdate, setVisibleUpdate] = useState(false)
  const [profileCompany, setProfileCompany] = useState([])
  const [putId, setPutId] = useState()
  const [putText, setPutText] = useState('')
  const [putPhoto, setPutPhoto] = useState()
  const [loading, setLoading] = useState(false)

  const { isError, isLoading, error, refetch } = useQuery('profile-company', async () => {
    const data = await getProfileCompany()
    setProfileCompany(data)
  })

  const { mutate: profileCompanyPut } = useMutation(
    () => putProfileCompany(putId, { text: putText, photo: putPhoto }),
    {
      onSuccess: async () => {
        setLoading(false)
        setPutText('')
        setPutPhoto()
        await refetch()
        toast.success('Sukses mengubah data', {
          autoClose: 1500,
        })
      },
      onError: (err) => {
        toast.error(err.response.data.message, { autoClose: 1500 })
      },
    },
  )

  return (
    <div>
      <h4 className="text-uppercase">
        <b>
          <center>
            <span className="text-center" style={{ fontFamily: 'Roboto' }}>
              PROFILE
            </span>
            <span
              style={{
                backgroundPositionY: '100%',
                paddingBottom: 10,
                backgroundSize: 'contain',
                color: '#0D4C92',
                fontFamily: 'Roboto',
              }}
            >
              COMPANY
            </span>
          </center>
        </b>
      </h4>
      <CRow>
        <CCardBody style={{ marginTop: '50px' }}>
          <CCol xs={12}>
            <CTable bordered responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">NO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">TEXT</CTableHeaderCell>
                  <CTableHeaderCell scope="col">IMAGE</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    <div className="d-flex justify-content-center">ACTION</div>
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <TableInfo
                  stsload={isLoading}
                  stserror={isError}
                  msg={error?.message}
                  count={profileCompany?.length}
                  col={5}
                />
                {profileCompany.map((data, i) => (
                  <CTableRow key={data.id}>
                    <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                    <CTableDataCell>{parse(data.text)}</CTableDataCell>
                    <CTableDataCell>
                      <CImage src={`http://62.72.1.134:8000/public/${data.photo}`} width="250" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex justify-content-center">
                        <CButton
                          style={{ color: 'white' }}
                          color="warning"
                          size="sm"
                          onClick={() => {
                            setPutId(data.id)
                            setPutText(data.text)
                            setPutPhoto(data.photo)
                            setVisibleUpdate(!visibleUpdate)
                          }}
                        >
                          <CIcon icon={cilColorBorder} />
                        </CButton>
                        <CModal
                          backdrop="static"
                          alignment="center"
                          visible={visibleUpdate}
                          size="lg"
                          onClose={() => setVisibleUpdate(false)}
                        >
                          <CModalHeader>
                            <CModalTitle>UPDATE DATA</CModalTitle>
                          </CModalHeader>
                          <CModalBody>
                            <div className="App">
                              <CKEditor
                                data={putText}
                                editor={ClassicEditor}
                                onChange={(event, editor) => {
                                  const data = editor.getData()
                                  setPutText(data)
                                }}
                              />
                            </div>
                            <CFormInput
                              type="file"
                              id="formFile"
                              label="Upload Images"
                              accept=".jpg, .jpeg, .png"
                              onChange={(e) => setPutPhoto(e.target.files[0])}
                            />
                          </CModalBody>
                          <CModalFooter>
                            <Stack direction="row" spacing={2}>
                              <Button variant="outlined" onClick={() => setVisibleUpdate(false)}>
                                CANCEL
                              </Button>
                              <Button
                                variant="contained"
                                onClick={() => {
                                  setLoading(true)
                                  profileCompanyPut(data.id)
                                  setVisibleUpdate(false)
                                }}
                                disabled={loading}
                              >
                                {loading ? 'LOADING...' : 'Update'}
                              </Button>
                            </Stack>
                          </CModalFooter>
                        </CModal>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCol>
        </CCardBody>
      </CRow>
    </div>
  )
}

export default About
