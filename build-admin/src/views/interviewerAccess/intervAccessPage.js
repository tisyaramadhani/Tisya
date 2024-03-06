import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CFormSelect,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormLabel,
  CCardHeader,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { getApplicationInterview, putApplicationAll } from 'src/api/ApplicationApi'
import { useQuery, useMutation } from 'react-query'
import { toast } from 'react-toastify'
import jwtDecode from 'jwt-decode'
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import UploadIcon from '@mui/icons-material/Upload'
import Stack from '@mui/material/Stack'
const token = jwtDecode(localStorage.getItem('accessToken'))

const IntervAccessPage = () => {
  const id = useState(token.id)
  const [visible, setVisible] = useState(false)
  const [interview] = useState([])
  const [putStatusInterview, setPutStatusInterview] = useState('')
  const [putStatus, setPutStatus] = useState('')
  const [putNextSelection, setPutNextSelection] = useState()
  const [putTahapSeleksi, setPutTahapSeleksi] = useState('')
  const [loading, setLoading] = useState(false)

  // get application interview
  const { data: interv, refetch } = useQuery('application-interview', async () => {
    return await getApplicationInterview(id[0])
  })

  //mengupdate data
  const [selectedRows, setSelectedRows] = useState([])
  const handleSelectionChange = (params) => {
    const selectedRowsData = params.map((id) => {
      const row = interv.find((row) => row.id === id)
      return { ...row }
    })
    setSelectedRows(selectedRowsData)
  }

  // put application interview
  function handleSaveAll() {
    const members = selectedRows.map(({ no_test }) => ({
      id: no_test,
      status: putStatus,
      next_selection: putNextSelection,
      tahap_seleksi: putTahapSeleksi,
      status_interview: putStatusInterview,
    }))

    saveData.mutate(members)
  }

  const saveData = useMutation(putApplicationAll, {
    onSuccess: async () => {
      setLoading(false)
      toast.success('Successfully update data', {
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

  // show detail
  const navigate = useNavigate()
  const showDetail = (id, nik, jobs_id) => {
    navigate('/candidatesData/', { state: { id: id, nik: nik, jobs_id: jobs_id } })
  }

  const data = [
    { field: 'checkbox', headerName: '', width: 50, checkboxSelection: true },
    {
      field: 'no_test',
      headerName: 'NO TEST',
      width: 300,
      renderCell: (params) => (
        <div
          onClick={() => {
            showDetail(params.row.id, params.row.applicants_nik, params.row.jobs_id)
          }}
          style={{ cursor: 'pointer', color: '#0D4C92' }}
        >
          {params.value}
        </div>
      ),
    },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'position', headerName: 'POSITION', width: 300 },
    { field: 'section', headerName: 'SECTION', width: 300 },
    { field: 'grade', headerName: 'GRADE', width: 300 },
    {
      field: '',
      headerName: 'ACTION',
      width: 200,
      renderCell: (params) => (
        <div style={{ alignItems: 'center' }}>
          <DisplaySettingsOutlinedIcon
            onClick={() => {
              showDetail(params.row.id, params.row.applicants_nik, params.row.jobs_id)
            }}
            style={{ cursor: 'pointer', color: 'blue', marginRight: '40px' }}
          />
        </div>
      ),
    },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4" style={{ marginTop: '50px' }}>
          <CCardHeader className="d-flex justify-content-center">
            <strong>DATA KANDIDAT</strong>
          </CCardHeader>
          <CCardBody>
            <CModal visible={visible} onClose={() => setVisible(false)}>
              <CModalHeader closeButton>
                <CModalTitle>DATA RESULT</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CFormLabel htmlFor="tahapseleksi">Selection Stage</CFormLabel>
                <CFormSelect
                  id="tahapseleksi"
                  value={putTahapSeleksi}
                  onChange={(e) => setPutTahapSeleksi(e.target.value)}
                  className="mb-3"
                >
                  <option defaultValue="">Choose Status</option>
                  <option value="Wawancara">Wawancara</option>
                </CFormSelect>

                <CFormLabel htmlFor="hasiladministrasi">Hasil Interview</CFormLabel>
                <CFormSelect
                  id="hasiladministrasi"
                  value={putStatusInterview}
                  onChange={(e) => {
                    setPutStatusInterview(e.target.value)
                    if (e.target.value === 'Lulus') {
                      setPutStatus('Lulus')
                      setPutNextSelection('Medical ChekUp')
                    } else {
                      // Reset the next_selection value if "Lulus" is not selected
                      setPutStatus('Tidak Lulus')
                      setPutNextSelection('')
                    }
                  }}
                  className="mb-3"
                >
                  <option defaultValue="">Choose Status</option>
                  <option value="Lulus">Lulus</option>
                  <option value="Tidak Lulus">Tidak Lulus</option>
                </CFormSelect>

                <CModalFooter>
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" onClick={() => setVisible(false)}>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => {
                        setLoading(true)
                        handleSaveAll(interview.id)
                        setVisible(false)
                      }}
                      disabled={loading}
                    >
                      {loading ? 'LOADING...' : 'Save'}
                    </Button>
                  </Stack>
                </CModalFooter>
              </CModalBody>
            </CModal>
            <CRow className="pb-3"></CRow>
            <CCardBody className="d-flex justify-content-end align-items-center">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<UploadIcon />}
                  onClick={() => {
                    setVisible(!visible)
                  }}
                >
                  Input Result
                </Button>
              </Stack>
            </CCardBody>
            <DataGrid
              checkboxSelection
              disableRowSelectionOnClick
              style={{ backgroundColor: 'white' }}
              rows={interv ?? []}
              columns={data}
              pageSize={12}
              autoHeight
              onSelectionModelChange={selectedRows}
              selectionModel={selectedRows}
              onRowSelectionModelChange={handleSelectionChange}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default IntervAccessPage
