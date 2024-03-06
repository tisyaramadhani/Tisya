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
  CFormInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilTrash, cilColorBorder } from '@coreui/icons'
import { useQuery, useMutation } from 'react-query'
import { TableInfo } from 'src/views/widgets/InfoTable'
import { getMajor, postMajor, putMajor, deleteMajor } from 'src/api/MasterApi'
import { toast } from 'react-toastify'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const MajorM = () => {
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleUpdate, setVisibleUpdate] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [major, setMajor] = useState([])
  const [postName, setPostName] = useState('')
  const [putName, setPutName] = useState('')
  const [putId, setPutId] = useState()
  const [deleteId, setDeleteId] = useState()
  const [loading, setLoading] = useState(false)

  const { isError, isLoading, error, refetch } = useQuery('Major', async () => {
    const data = await getMajor()
    setMajor(data)
  })

  const { mutate: MajorPost } = useMutation(() => postMajor({ name: postName }), {
    onSuccess: async () => {
      setLoading(false)
      setPostName('')
      await refetch()
      toast.success('Successfully add data', {
        autoClose: 1500,
      })
    },
    onError: (err) => {
      setLoading(false)
      toast.error(err.response.data.message, {
        autoClose: 1500,
      })
    },
  })

  const { mutate: MajorPut } = useMutation(() => putMajor(putId, { name: putName }), {
    onSuccess: async () => {
      setLoading(false)
      setPutName('')
      await refetch()
      toast.success('Successfully update data', {
        autoClose: 1500,
      })
    },
    onError: (err) => {
      setLoading(false)
      toast.error(err.response.data.message, {
        autoClose: 1500,
      })
    },
  })

  const { mutate: MajorDelete } = useMutation(async () => deleteMajor(deleteId), {
    onSuccess: async (data) => {
      setLoading(false)
      const res = major.filter((x) => x.id !== data.id)
      setMajor(res)
      toast.success('Successfully delete data', {
        autoClose: 1500,
      })
      await refetch()
    },
    onError: (err) => {
      setLoading(false)
      toast.error(err.response.data.message, {
        autoClose: 1500,
      })
    },
  })

  return (
    <div>
      <h4 className="text-uppercase">
        <b>
          <center>
            <span className="text-center" style={{ fontFamily: 'Roboto' }}>
              LIST OF
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
              MAJOR
            </span>
          </center>
        </b>
      </h4>
      <CCardBody style={{ marginTop: '60px' }}>
        <CModal backdrop="static" visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
          <CModalHeader style={{ color: '#0D4C92' }}>
            <CModalTitle>DELETE DATA</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure you want to delete the course data?</CModalBody>
          <CModalFooter>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => {
                  setLoading(true)
                  MajorDelete()
                  setVisibleDelete(false)
                }}
                disabled={loading}
              >
                {loading ? 'LOADING...' : 'Delete'}
              </Button>
              <Button variant="outlined" onClick={() => setVisibleDelete(false)}>
                Cancel
              </Button>
            </Stack>
          </CModalFooter>
        </CModal>
        <CModal alignment="center" visible={visibleUpdate} onClose={() => setVisibleUpdate(false)}>
          <CModalHeader style={{ color: '#0D4C92' }}>
            <CModalTitle>UPDATE MAJOR</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CTable borderless>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">MAJOR NAME</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CFormInput
                      size="sm"
                      type="text"
                      aria-label="sm input example"
                      value={putName}
                      onChange={(e) => setPutName(e.target.value)}
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
                  MajorPut(major.id)
                  setVisibleUpdate(false)
                }}
                disabled={loading}
              >
                {loading ? 'LOADING...' : 'Update'}
              </Button>
            </Stack>
          </CModalFooter>
        </CModal>
        <div className="d-flex justify-content-start mb-3">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setVisibleAdd(!visibleAdd)}
          >
            ADD DATA
          </Button>
          <CModal alignment="center" visible={visibleAdd} onClose={() => setVisibleAdd(false)}>
            <CModalHeader style={{ color: '#0D4C92' }}>
              <CModalTitle>ADD MAJOR</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CTable borderless>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">MAJOR NAME</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormInput
                        size="sm"
                        type="text"
                        aria-label="sm input example"
                        value={postName}
                        onChange={(e) => setPostName(e.target.value)}
                      />
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CModalBody>
            <CModalFooter>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={() => setVisibleAdd(false)}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setLoading(true)
                    setVisibleAdd(false)
                    MajorPost()
                  }}
                  disabled={loading}
                >
                  {loading ? 'LOADING...' : 'Add Data'}
                </Button>
              </Stack>
            </CModalFooter>
          </CModal>
        </div>
        <CTable bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">NO</CTableHeaderCell>
              <CTableHeaderCell scope="col">MAJOR NAME</CTableHeaderCell>
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
              count={major?.length}
              col={5}
            />
            {major.map((major, i) => (
              <CTableRow key={major.id}>
                <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                <CTableDataCell>{major.name}</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-center">
                    {/* update */}
                    <CButton
                      className="me-3"
                      style={{ color: 'white' }}
                      color="warning"
                      size="sm"
                      onClick={() => {
                        setPutId(major.id)
                        setPutName(major.name)
                        setVisibleUpdate(!visibleUpdate)
                      }}
                    >
                      <CIcon icon={cilColorBorder} />
                    </CButton>
                    <CButton
                      style={{ color: 'white', backgroundColor: 'red', borderColor: 'red' }}
                      size="sm"
                      onClick={() => {
                        setDeleteId(major.id)
                        setPutName(major.name)
                        setVisibleDelete(!visibleDelete)
                      }}
                    >
                      <CIcon icon={cilTrash} />
                    </CButton>
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

export default MajorM
