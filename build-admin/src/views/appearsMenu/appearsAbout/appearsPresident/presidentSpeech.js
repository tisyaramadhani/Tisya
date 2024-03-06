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
  CPagination,
  CPaginationItem,
  CButton,
  CFormInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilColorBorder } from '@coreui/icons'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { getPresidentText, putPresidentText } from 'src/api/PresidentTextApi'
import { useQuery, useMutation } from 'react-query'
import parse from 'html-react-parser'
import { toast } from 'react-toastify'
import { Button, Stack } from '@mui/material'
import { TableInfo } from 'src/views/widgets/InfoTable'

const PresidentSpeech = () => {
  const [visibleUpdate, setVisibleUpdate] = useState(false)
  const [presidentText, setPresidentText] = useState([])
  const [putId, setPutId] = useState()
  const [putText, setPutText] = useState('')
  const [putPhoto, setPutPhoto] = useState()
  const [loading, setLoading] = useState(false)

  const { isError, isLoading, error, refetch } = useQuery('president-text', async () => {
    const data = await getPresidentText()
    setPresidentText(data)
  })

  const { mutate: presidentTextPut } = useMutation(
    () => putPresidentText(putId, { text: putText, photo: putPhoto }),
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
              PRESIDENT
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
              SPEECH
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
                  count={presidentText?.length}
                  col={5}
                />
                {presidentText.map((data, i) => (
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
                                Cancel
                              </Button>
                              <Button
                                variant="contained"
                                onClick={() => {
                                  setLoading(true)
                                  presidentTextPut(data.id)
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

export default PresidentSpeech
