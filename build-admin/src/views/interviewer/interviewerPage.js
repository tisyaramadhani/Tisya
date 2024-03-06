import React, { useState } from 'react'
import {
  CCardBody,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CFormLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import { useQuery, useMutation } from 'react-query'
import { getInterviewer, postInterviewer, deleteUser } from 'src/api/UserApi'
import randomstring from 'randomstring'
import { toast } from 'react-toastify'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { useLocation } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const InterviewerPage = () => {
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [interviewer, setInterviewer] = useState([])
  const [postName, setPostName] = useState('')
  const [postNik, setPostNik] = useState('')
  const [postEmail, setPostEmail] = useState('')
  const [putName, setPutName] = useState('')
  const [deleteId, setDeleteId] = useState()
  const { state } = useLocation()
  const [loading, setLoading] = useState(false)

  const { data: interv, refetch } = useQuery('interviewer', async () => {
    return await getInterviewer(state)
  })

  const { mutate: interviewerPost } = useMutation(
    () =>
      postInterviewer({
        nik: postNik,
        name: postName,
        email: postEmail,
        password: randomstring.generate(7),
        verified: 1,
        roles_id: 2,
      }),
    {
      onSuccess: async () => {
        setLoading(false)
        setPostName('')
        setPostNik('')
        setPostEmail('')
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
    },
  )

  const { mutate: interviewerDelete } = useMutation(() => deleteUser(deleteId), {
    onSuccess: async (data) => {
      setLoading(false)
      const res = interviewer.filter((x) => x.id !== data.id)
      setInterviewer(res)
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

  const data = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'nik', headerName: 'NIK', width: 250 },
    { field: 'name', headerName: 'NAME', width: 450 },
    { field: 'email', headerName: 'EMAIL', width: 450 },

    {
      field: '',
      headerName: 'ACTION',
      width: 300,
      renderCell: (params) => (
        <DeleteIcon
          onClick={() => {
            setDeleteId(params.row.id)
            setPutName(params.row.name)
            setVisibleDelete(!visibleDelete)
          }}
          style={{ cursor: 'pointer', color: 'red' }}
        />
      ),
    },
  ]

  return (
    <div>
      <h4 className="text-uppercase">
        <b>
          <center>
            <span className="text-center" style={{ fontFamily: 'Roboto' }}>
              INTERVIEWER
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
        <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
          <CModalHeader style={{ color: '#0D4C92' }}>
            <CModalTitle>DELETE DATA</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure you want to delete interviewer data {putName} ?</CModalBody>
          <CModalFooter>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => {
                  setLoading(true)
                  interviewerDelete(deleteId)
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
        <div className="mb-3">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            style={{ color: 'white' }}
            onClick={() => setVisibleAdd(!visibleAdd)}
          >
            ADD DATA
          </Button>
          <CModal alignment="center" visible={visibleAdd} onClose={() => setVisibleAdd(false)}>
            <CModalHeader style={{ color: '#0D4C92' }}>
              <CModalTitle>ADD INTERVIEWER</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CTable borderless>
                <CTableHead></CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="nama">Name</CFormLabel>
                      <CFormInput
                        size="sm"
                        type="text"
                        id="nama"
                        value={postName}
                        onChange={(e) => setPostName(e.target.value)}
                      />
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <CTable borderless>
                <CTableHead></CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="nik">NIK</CFormLabel>
                      <CFormInput
                        size="sm"
                        type="number"
                        id="nik"
                        value={postNik}
                        onChange={(e) => setPostNik(e.target.value)}
                      />
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <CTable borderless>
                <CTableHead></CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="email">Email</CFormLabel>
                      <CFormInput
                        size="sm"
                        type="email"
                        id="email"
                        value={postEmail}
                        onChange={(e) => setPostEmail(e.target.value)}
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
                    interviewerPost()
                    setVisibleAdd(false)
                  }}
                  disabled={loading}
                >
                  {loading ? 'LOADING...' : 'Add Data'}
                </Button>
              </Stack>
            </CModalFooter>
          </CModal>
        </div>
        <DataGrid
          style={{ backgroundColor: 'white' }}
          rows={interv ?? []}
          columns={data}
          pageSize={12}
          autoHeight
        />
      </CCardBody>
    </div>
  )
}

export default InterviewerPage
