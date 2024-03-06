import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormLabel,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormSelect,
  CFormInput,
} from '@coreui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getJobById } from 'src/api/VacancyApi'
import { getApplicationByJob, putApplicationByJobAll } from 'src/api/ApplicationApi'
import { useQuery, useMutation } from 'react-query'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined'
import { toast } from 'react-toastify'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import TaskIcon from '@mui/icons-material/Task'
import Button from '@mui/material/Button'
import UploadIcon from '@mui/icons-material/Upload'
import Stack from '@mui/material/Stack'

const DetailVacancy = () => {
  const [job, setJob] = useState([])
  const { state } = useLocation()
  // get Job by id
  useQuery('job', async () => {
    const data = await getJobById(state)
    setJob(data)
  })

  const [visible, setVisible] = useState(false)

  // get application by job
  const { data: applicationJob, refetch } = useQuery('application-job', async () => {
    return await getApplicationByJob(state)
  })

  // show detail
  const navigate = useNavigate()
  const showDetail = (id, nik) => {
    navigate('/applicantData/', { state: { id: id, nik: nik, jobs_id: job.id } })
  }

  const showResult = (id) => {
    navigate('/candidatesResult/', { state: { id: id, jobs_id: job.id } })
  }

  //modal input
  const [putNextSelection, setPutNextSelection] = useState('')
  const [putTimeSelection, setPutTimeSelection] = useState('')
  const [putTime, setPutTime] = useState('')
  const [putPlace, setPutPlace] = useState('')
  const [putTimeTable, setPutTimeTable] = useState()
  const [putTahapSeleksi, setPutTahapSeleksi] = useState()
  const [putPosition, setPutPosition] = useState('')
  const [putStatus, setPutStatus] = useState('')
  const [loading, setLoading] = useState(false)

  //mengirim data ke result
  const [selectedRows, setSelectedRows] = useState([])
  const handleSelectionChange = (params) => {
    const selectedRowsData = params.map((id) => {
      const row = applicationJob.find((row) => row.id === id)
      return { ...row, email: row.email }
    })
    setSelectedRows(selectedRowsData)
  }

  function handleSaveAll() {
    const members = selectedRows.map(({ no_test }) => ({
      id: no_test,
      status: putStatus,
      next_selection: putNextSelection,
      time: putTime,
      place: putPlace,
      time_selection: putTimeSelection,
      timetable: putTimeTable,
      tahap_seleksi: putTahapSeleksi,
      position: putPosition,
    }))

    saveData.mutate(members)
  }

  const saveData = useMutation(putApplicationByJobAll, {
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

  //DataGrid Data Applicant
  const data = [
    { field: 'checkbox', headerName: '', width: 50, checkboxSelection: true },
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'no_test',
      headerName: 'NO REGISTRATION',
      width: 150,
      renderCell: (params) => (
        <div
          onClick={() => showDetail(params.row.id, params.row.applicants_nik)}
          style={{ cursor: 'pointer', color: '#0D4C92' }}
        >
          {params.value}
        </div>
      ),
    },
    { field: 'nik', headerName: 'NIK', width: 150 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'place_of_birth', headerName: 'PLACE OF BIRTH', width: 300 },
    { field: 'date_of_birth', headerName: 'DATE OF BIRTH', width: 200 },
    { field: 'gender', headerName: 'GENDER', width: 120 },
    { field: 'height', headerName: 'HEIGHT', width: 120 },
    { field: 'weight', headerName: 'WEIGHT', width: 120 },
    { field: 'marital_status', headerName: 'MARITAL STATUS', width: 120 },
    { field: 'address_ktp', headerName: 'ADDRESS KTP', width: 200 },
    { field: 'address', headerName: 'ADDRESS', width: 120 },
    { field: 'religion', headerName: 'RELIGION', width: 120 },
    { field: 'biologic_mother_name', headerName: 'BIOLOGIS MOTHER NAME', width: 200 },
    { field: 'father_name', headerName: 'FATHER NAME', width: 120 },
    { field: 'mother_name', headerName: 'MOTHER NAME', width: 120 },
    { field: 'npwp', headerName: 'NPWP', width: 120 },
    { field: 'last_education', headerName: 'LAST EDUCATION', width: 200 },
    { field: 'school_name', headerName: 'SCHOOL NAME', width: 300 },
    { field: 'major', headerName: 'MAJOR', width: 300 },
    { field: 'graduation_year', headerName: 'GRADUATION YEAR', width: 200 },
    { field: 'ipk', headerName: 'IPK', width: 200 },
    { field: 'work_experience_pt', headerName: 'WORK EXPERIENCE PT', width: 300 },
    { field: 'work_experience', headerName: 'WORK EXPERIENCE', width: 300 },
    { field: 'company_name', headerName: 'COMPANY NAME', width: 300 },
    { field: 'experience_description', headerName: 'EXPERIENCE DESCRIPTION ', width: 300 },
    { field: 'skills', headerName: 'SKILLS', width: 200 },
    { field: 'certification', headerName: 'CERTIFICATION', width: 200 },
    { field: 'expected_salary', headerName: 'EXPECTED SALARY', width: 200 },
    { field: 'expected_working_time', headerName: 'EXPECTED WORKING TIME', width: 200 },
    { field: 'ready_shift', headerName: 'READY SHIFT', width: 200 },
    { field: 'ready_any_department', headerName: 'READY ANY DEPARTMENT', width: 200 },
    { field: 'is_studying', headerName: 'IS STUDYING', width: 200 },
    { field: 'is_working', headerName: 'IS WORKING', width: 200 },
    { field: 'vehicle', headerName: 'VEHICLE', width: 200 },
    { field: 'have-sim', headerName: 'HAVE SIM', width: 200 },
    { field: 'nail_long', headerName: 'NAIL LONG', width: 200 },
    { field: 'hospitalized', headerName: 'HOSPITALIZED', width: 200 },
    { field: 'have_disease', headerName: 'HAVE DISEASE', width: 200 },
    { field: 'smoking', headerName: 'SMOKING', width: 200 },
    { field: 'left_handed', headerName: 'LEFT HANDED', width: 200 },
    { field: 'distinguish_colors', headerName: 'DISTINGUISH COLOR', width: 200 },
    { field: 'is_worked_sbi', headerName: 'IS WORKED SBI', width: 200 },
    { field: 'ever_worked_sbi', headerName: 'EVER WORKED SBI', width: 200 },
    { field: 'hobby', headerName: 'HOBBY', width: 200 },
    { field: 'special_achievements', headerName: 'SPECIAL ACHIEVEMENTS', width: 300 },
    { field: 'motivation', headerName: 'motivation', width: 200 },
    { field: 'tribe', headerName: 'TRIBE', width: 200 },
    { field: 'no_hp', headerName: 'NO HP', width: 150 },
    { field: 'no_wa', headerName: 'NO WHATSAPP', width: 150 },
    { field: 'email', headerName: 'EMAIL', width: 300 },
    { field: 'createdAt', headerName: 'CREATED AT', width: 150 },
    { field: 'updatedAt', headerName: 'UPDATED AT', width: 150 },

    {
      field: '',
      headerName: 'ACTION',
      width: 200,
      renderCell: (params) => (
        <DisplaySettingsOutlinedIcon
          onClick={() => showDetail(params.row.id, params.row.applicants_nik)}
          style={{ cursor: 'pointer' }}
        />
      ),
    },
  ]

  return (
    <div>
      <CCard className="mb-4">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#0D4C92' }}>
              DETAIL VACANCIES {job.position}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <CTable borderless>
                <CTableHead></CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="posisi">POSITON</CFormLabel>
                      <div className="p-3 bg-light bg-gradient rounded" id="posisi">
                        {job.position}
                      </div>
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="perkiraantanggalbergabung">JOIN DATE</CFormLabel>
                      <div
                        className="p-3 bg-light bg-gradient rounded"
                        id="perkiraantanggalbergabung"
                      >
                        {job.estimated_joining}
                      </div>
                    </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="section">SECTION</CFormLabel>
                      <div className="p-3 bg-light bg-gradient rounded" id="section">
                        {job.section}
                      </div>
                    </CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="waktupendaftaran">REGISTRATION TIME</CFormLabel>
                      <div className="p-3 bg-light bg-gradient rounded" id="waktupendaftaran">
                        {job.application_open}
                      </div>
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="waktupendaftaran2">s.d</CFormLabel>
                      <div className="p-3 bg-light bg-gradient rounded" id="waktupendaftaran2">
                        {job.application_close}
                      </div>
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="persyaratankualifikasi">
                        REQUIREMENTS & QUALIFICATION
                      </CFormLabel>
                      <div
                        className="p-3 bg-light bg-gradient rounded"
                        id="persyaratankualifikasi"
                        dangerouslySetInnerHTML={{ __html: job.qualification }}
                      />
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="timelinerecruitment">
                        TIMELINE REQUIREMENTS & SELECTION
                      </CFormLabel>
                      <div
                        className="p-3 bg-light bg-gradient rounded"
                        id="persyaratankualifikasi"
                        dangerouslySetInnerHTML={{ __html: job.timeline }}
                      />
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormLabel htmlFor="tentangperusahaan">ABOUT COMPANY</CFormLabel>
                      <div
                        className="p-3 bg-light bg-gradient rounded"
                        id="tentangperusahaan"
                        dangerouslySetInnerHTML={{ __html: job.about_company }}
                      />
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </AccordionDetails>
        </Accordion>
      </CCard>
      <CCardBody className="d-flex justify-content-end align-items-center">
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<TaskIcon />}
            onClick={() => showResult(applicationJob.id)}
          >
            Result
          </Button>

          <Button
            variant="contained"
            startIcon={<UploadIcon />}
            onClick={() => {
              setPutPosition(data.position)

              setVisible(!visible)
            }}
          >
            Input Result
          </Button>
        </Stack>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader closeButton>
            <CModalTitle>DATA RESULT</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormLabel htmlFor="posisi">Position</CFormLabel>
            <CFormInput
              id="position"
              type="text"
              value={job.position}
              onChange={(e) => setPutPosition(e.target.value)}
              className="mb-3"
              disabled
            ></CFormInput>
            <CFormLabel htmlFor="hasiladministrasi">Selection Stage</CFormLabel>
            <CFormSelect
              id="tahapseleksi"
              value={putTahapSeleksi}
              onChange={(e) => setPutTahapSeleksi(e.target.value)}
              className="mb-3"
            >
              <option defaultValue="">Choose Status</option>
              <option value="Administrasi">Administrasi</option>
            </CFormSelect>
            <CFormLabel htmlFor="hasiladministrasi">Administration Result</CFormLabel>
            <CFormSelect
              id="hasiladministrasi"
              value={putStatus}
              onChange={(e) => setPutStatus(e.target.value)}
              className="mb-3"
            >
              <option defaultValue="">Choose Status</option>
              <option value="Lulus">Passed</option>
              <option value="Tidak Lulus">Not pass</option>
            </CFormSelect>
            {putStatus !== 'Tidak Lulus' && (
              <>
                <CFormLabel htmlFor="hasiladministrasi">Next Selection</CFormLabel>
                <CFormSelect
                  id="tahapanselanjutnya"
                  value={putNextSelection}
                  onChange={(e) => setPutNextSelection(e.target.value)}
                  className="mb-3"
                >
                  <option defaultValue="">Choose Status</option>
                  <option value="Tes Tahap 1">Tes Tahap 1</option>
                </CFormSelect>
                <CFormLabel htmlFor="jadwalseleksi">Selection Schedule</CFormLabel>
                <CFormInput
                  id="jadwalseleksi"
                  type="date"
                  value={putTimeSelection}
                  onChange={(e) => setPutTimeSelection(e.target.value)}
                  className="mb-3"
                ></CFormInput>
                <CFormLabel htmlFor="waktuseleksi">Selection Time</CFormLabel>
                <CFormInput
                  id="waktuseleksi"
                  type="time"
                  value={putTime}
                  onChange={(e) => setPutTime(e.target.value)}
                  className="mb-3"
                ></CFormInput>
                <CFormLabel htmlFor="tempatseleksi">Selection Place</CFormLabel>
                <CFormInput
                  id="tempatseleksi"
                  type="text"
                  value={putPlace}
                  onChange={(e) => setPutPlace(e.target.value)}
                  className="mb-3"
                ></CFormInput>
                <CFormLabel htmlFor="timelineseleksi">Selection Timeline</CFormLabel>
                <CKEditor
                  data={putTimeTable}
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setPutTimeTable(data)
                  }}
                  className="mb-3"
                />
              </>
            )}
            <CModalFooter>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={() => setVisible(false)}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setLoading(true)
                    handleSaveAll()
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
      </CCardBody>

      <DataGrid
        style={{ backgroundColor: 'white', marginTop: '30px' }}
        checkboxSelection
        disableRowSelectionOnClick
        rows={applicationJob ?? []}
        columns={data}
        pageSize={12}
        autoHeight
        onSelectionModelChange={selectedRows}
        selectionModel={selectedRows}
        onRowSelectionModelChange={handleSelectionChange}
      />
    </div>
  )
}

export default DetailVacancy
