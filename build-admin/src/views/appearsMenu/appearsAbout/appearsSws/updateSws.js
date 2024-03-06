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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CImage,
  CFormInput,
  CModalFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilColorBorder } from '@coreui/icons'
import { getSWS, putSWS } from 'src/api/SWSApi'
import { useQuery, useMutation } from 'react-query'
import { toast } from 'react-toastify'

const UpdateSws = () => {
  const [visibleUpdate, setVisibleUpdate] = useState(false)
  const [sws, setSWS] = useState([])
  const [putId, setPutId] = useState()
  const [putPhoto, setPutPhoto] = useState()

  // get sws
  const { refetch } = useQuery('sws', async () => {
    const data = await getSWS()
    setSWS(data)
  })

  // put sws
  const { mutate: swsPut } = useMutation(() => putSWS(putId, { photo: putPhoto }), {
    onSuccess: async () => {
      setPutPhoto()
      await refetch()
      toast.success('Sukses mengubah data', {
        autoClose: 1500,
      })
    },
    onError: (err) => {
      toast.error(err.response.data.message, { autoClose: 1500 })
    },
  })

  return (
    <CRow>
      <CCol>
        <h4>DATA SWS</h4>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable bordered responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">NO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Foto</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    <p className="d-flex justify-content-center">Aksi</p>
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {sws.map((data, i) => (
                  <CTableRow key={data.id}>
                    <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                    <CTableDataCell>
                      <CImage src={`http://localhost:5000/public/${data.photo}`} width="250" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex justify-content-center">
                        {/* update */}
                        <CButton
                          style={{ color: 'white' }}
                          color="warning"
                          size="sm"
                          onClick={() => {
                            setPutId(data.id)
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
                            <CModalTitle>PERBARUI SWS</CModalTitle>
                          </CModalHeader>
                          <CModalBody>
                            <CFormInput
                              type="file"
                              id="formFile"
                              label="Masukkan Foto"
                              accept=".jpg, .jpeg, .png, .pdf"
                              onChange={(e) => setPutPhoto(e.target.files[0])}
                            />
                          </CModalBody>
                          <CModalFooter>
                            <CButton
                              color="secondary"
                              style={{ color: 'white' }}
                              onClick={() => setVisibleUpdate(false)}
                            >
                              KEMBALI
                            </CButton>
                            <CButton
                              color="primary"
                              onClick={() => {
                                swsPut(data.id)
                                setVisibleUpdate(false)
                              }}
                            >
                              UBAH
                            </CButton>
                          </CModalFooter>
                        </CModal>
                        {/* akhir update */}
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
          <CPagination className="justify-content-center">
            <CPaginationItem>Previous</CPaginationItem>
            <CPaginationItem>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem>
            <CPaginationItem>Next</CPaginationItem>
          </CPagination>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UpdateSws
