import React, { useState } from 'react'
import {
  CCardBody,
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilColorBorder } from '@coreui/icons'
import { getRunningText, putRunningText } from 'src/api/RunningTextApi'
import { useQuery, useMutation } from 'react-query'
import { TableInfo } from 'src/views/widgets/InfoTable'
import { toast } from 'react-toastify'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Home = () => {
  const [visibleUpdate, setVisibleUpdate] = useState(false)
  const [runningText, setRunningText] = useState([])
  const [putId, setPutId] = useState()
  const [putText, setPutText] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    isError: runningTextGetIsError,
    isLoading: runningTextGetIsLoading,
    error: runningTextGetError,
    refetch,
  } = useQuery('running-text', async () => {
    const data = await getRunningText()
    setRunningText(data)
  })

  // put running text
  const { mutate: runningTextPut } = useMutation(() => putRunningText(putId, { text: putText }), {
    onSuccess: async () => {
      setLoading(false)
      setPutText('')
      await refetch()
      toast.success('Successfully update data', {
        autoClose: 1500,
      })
    },
    onError: (err) => {
      setLoading(false)
      toast.error(err.response.data.message, { autoClose: 1500 })
    },
  })

  return (
    <div>
      <h4 className="text-uppercase">
        <b>
          <center>
            <span className="text-center" style={{ fontFamily: 'Roboto' }}>
              RUNNING TEXT
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
              {' '}
              DATA
            </span>
          </center>
        </b>
      </h4>
      <CCardBody style={{ marginTop: '60px' }}>
        <CTable bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">NO</CTableHeaderCell>
              <CTableHeaderCell scope="col">TEXT</CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <div className="d-flex justify-content-center">ACTION</div>
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <TableInfo
              stsload={runningTextGetIsLoading}
              stserror={runningTextGetIsError}
              msg={runningTextGetError?.message}
              count={runningText?.length}
              col={5}
            />
            {runningText?.map((runningText, i) => (
              <CTableRow key={runningText.id}>
                <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                <CTableDataCell>{runningText.text} </CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-center">
                    {/* update */}
                    <CButton
                      className="me-3"
                      style={{ color: 'white' }}
                      color="warning"
                      size="sm"
                      onClick={() => {
                        setPutId(runningText.id)
                        setPutText(runningText.text)
                        setVisibleUpdate(!visibleUpdate)
                      }}
                    >
                      <CIcon icon={cilColorBorder} />
                    </CButton>
                    <CModal
                      alignment="center"
                      visible={visibleUpdate}
                      onClose={() => setVisibleUpdate(false)}
                    >
                      <CModalHeader style={{ color: '#0D4C92' }}>
                        <CModalTitle>UPDATE RUNNING TEXT</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <CTable borderless>
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">RUNNING TEXT</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            <CTableRow>
                              <CTableHeaderCell scope="row">
                                <CFormInput
                                  size="sm"
                                  type="text"
                                  aria-label="sm input example"
                                  value={putText}
                                  onChange={(e) => setPutText(e.target.value)}
                                />
                              </CTableHeaderCell>
                            </CTableRow>
                          </CTableBody>
                        </CTable>
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
                              runningTextPut(runningText.id)
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
      </CCardBody>
    </div>
  )
}

export default Home
