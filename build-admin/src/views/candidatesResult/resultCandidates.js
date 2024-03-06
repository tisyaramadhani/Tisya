import React, { useRef, useState } from 'react'
import {
  CCard,
  CCardBody,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useLocation } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { getApplicationByJobStatus, putApplicationAll } from 'src/api/ApplicationApi'
import { getSelection } from 'src/api/SelectionApi'
import { toast } from 'react-toastify'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { getInterviewer } from 'src/api/UserApi'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import UploadIcon from '@mui/icons-material/Upload'
import Stack from '@mui/material/Stack'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { read, utils } from 'xlsx'
import { saveAs } from 'file-saver'
import { Download } from '@mui/icons-material'

const EXTENSIONS = ['xlsx', 'xls', 'csv']

const getExention = (file) => {
  const parts = file.name.split('.')
  const extension = parts[parts.length - 1]
  return EXTENSIONS.includes(extension)
}

dayjs.extend(customParseFormat)

const excelDateToDayjs = (excelDate) => {
  // Convert Excel date to milliseconds
  const milliseconds = (excelDate - 25569) * 86400 * 1000
  // Convert milliseconds to a Day.js object
  return dayjs(milliseconds)
}

// template excel
const dummyData = [
  {
    id: '7URBMO',
    name: 'Tisya Ramadhani',
    status: 'Lulus',
    grade: 90,
    tahap_seleksi: 'Tes Tahap 1',
    next_selection: 'Administrasi',
    time_selection: '2024-02-25',
    time: '06:30',
    timetable: '<p>TEST</p>',
    place: 'PT Sumitomo Wiring Systems Batam Indonesia',
    medical_check: 'Fit',
    interviewer_id: '',
  },
]

const ResultCandidates = () => {
  const { state } = useLocation()
  const [visiblePass, setVisiblePass] = useState(false)
  const [selection, setSelection] = useState([])
  const [putGrade, setPutGrade] = useState('')
  const [putStatus, setPutStatus] = useState('')
  const [putMedical, setPutMedical] = useState('')
  const [putNextSelection, setPutNextSelection] = useState()
  const [putTimeSelection, setPutTimeSelection] = useState('')
  const [putTimeTable, setPutTimeTable] = useState()
  const [putTahapSeleksi, setPutTahapSeleksi] = useState()
  const [putInterviewer, setPutInterviewer] = useState('')
  const [interviewer, setInterviewer] = useState([])
  const [putSection, setPutSection] = useState('')
  const [putPosition, setPutPosition] = useState('')
  const [putTime, setPutTime] = useState('')
  const [putName] = useState('')
  const [putPlace] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  //menampilkan user interviewer
  useQuery('interviewer', async () => {
    const data = await getInterviewer()
    setInterviewer(data)
  })

  // menampilkan data seleksi
  useQuery('selection', async () => {
    const data = await getSelection()
    setSelection(data)
  })

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    )
  }

  //menampilkan data pelamar lulus dan tidak lulus
  const { data: applicant, refetch } = useQuery('application-job-status', async () => {
    return await getApplicationByJobStatus(state.jobs_id)
  })

  // handle check box
  const [selectedRows, setSelectedRows] = useState([])
  const handleSelectionChange = (params) => {
    const selectedRowsData = params.map((id) => {
      const row = applicant?.lulus.find((row) => row.id === id)
      return { ...row }
    })
    setSelectedRows(selectedRowsData)
  }

  // update tahap seleksi pelamar
  function handleSaveAll() {
    const members = selectedRows.map(({ no_test }) => ({
      id: no_test,
      name: putName,
      grade: putGrade,
      status: putStatus,
      next_selection: putNextSelection,
      time: putTime,
      time_selection: putTimeSelection,
      timetable: putTimeTable,
      tahap_seleksi: putTahapSeleksi,
      interviewer_id: putInterviewer,
      place: putPlace,
      section: putSection,
      position: putPosition,
      medical_check: putMedical,
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

  const data = [
    { field: 'checkbox', headerName: '', width: 50, checkboxSelection: true },
    { field: 'no_test', headerName: 'NO TEST', width: 150 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'status', headerName: 'STATUS', width: 300 },
    { field: 'grade', headerName: 'GRADE', width: 300 },
    { field: 'tahap_seleksi', headerName: 'SELECTION', width: 200 },
    { field: 'next_selection', headerName: 'NEXT SELECTION', width: 250 },
    { field: 'time_selection', headerName: 'TIME SELECTION', width: 200 },
    { field: 'time', headerName: 'TIME', width: 200 },
    {
      field: 'timetable',
      headerName: 'TIME TABLE',
      width: 200,
      renderCell: (params) => {
        const timetableContent = params.value
        const strippedContent = timetableContent.replace(/<p>|<\/p>/g, '')
        return strippedContent
      },
    },
    { field: 'place', headerName: 'PLACE', width: 150 },
    { field: 'medical_check', headerName: 'MEDICAL RESULT', width: 150 },
    { field: 'interviewer_id', headerName: 'INTERVIEWER', width: 200 },
  ]

  const datas = [
    { field: 'no_test', headerName: 'NO TEST', width: 150 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'position', headerName: 'POSITION', width: 300 },
    { field: 'section', headerName: 'SECTION', width: 300 },
    { field: 'tahap_seleksi', headerName: 'SELECTION STAGE', width: 300 },
    { field: 'grade', headerName: 'SELECTION RESULT', width: 200 },
    { field: 'medical_check', headerName: 'MEDICAL RESULT', width: 150 },
  ]

  function importData() {
    inputRef.current.click()
  }

  const convertToJson = (headers, data) => {
    const rows = []
    data.forEach((row, i) => {
      let rowData = {
        id: i,
      }
      row.forEach((element, index) => {
        if (headers[index] === 'time_selection') {
          const actualDate = excelDateToDayjs(element)
          rowData[headers[index]] = actualDate.format('YYYY-MM-DD')
        } else {
          rowData[headers[index]] = element
        }
      })
      rows.push(rowData)
    })
    return rows
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (event) => {
      const bstr = event.target.result
      const workBook = read(bstr, { type: 'binary' })
      const workSheetName = workBook.SheetNames[0]
      const workSheet = workBook.Sheets[workSheetName]
      const fileData = utils.sheet_to_json(workSheet, { header: 1 })
      const headers = fileData[0]
      fileData.splice(0, 1)
      const res = convertToJson(headers, fileData)
      saveData.mutate(res)
    }

    if (file) {
      if (getExention(file)) {
        reader.readAsBinaryString(file)
      } else {
        toast.error('Invalid file input, Select Excel, CSV file', {
          autoClose: 1500,
        })
      }
    }
  }

  // handle download template excel
  const downloadData = () => {
    const header = Object.keys(dummyData[0])
    const csv = [
      header.join(','),
      ...dummyData.map((item) =>
        header.map((fieldName) => JSON.stringify(item[fieldName])).join(','),
      ),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    saveAs(blob, 'template.csv')
  }

  return (
    <div style={{ marginTop: '80px' }}>
      <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={handleFileChange} />
      <CModal
        backdrop="static"
        alignment="center"
        visible={visiblePass}
        onClose={() => setVisiblePass(false)}
      >
        <CModalHeader style={{ color: '#0D4C92' }}>
          <CModalTitle>CANDIDATES PASS</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormLabel htmlFor="tahapseleksi">Selection Stage</CFormLabel>

          <CFormSelect
            id="tahapseleksi"
            value={putTahapSeleksi}
            onChange={(e) => setPutTahapSeleksi(e.target.value)}
            className="mb-3"
          >
            <option defaultValue="">Choose Selection</option>
            <option value="Tes Tahap 1">Tes Tahap 1</option>
            <option value="Wawancara">Wawancara</option>
            <option value="Medical Check Up">Medical Check Up</option>
            <option value="Induction">Induction</option>
          </CFormSelect>
          {putTahapSeleksi === 'Medical Check Up' && (
            <>
              <CFormLabel htmlFor="medical_check">Medical Result</CFormLabel>
              <CFormSelect
                id="medical_check"
                value={putMedical}
                onChange={(e) => setPutMedical(e.target.value)}
                className="mb-3"
              >
                <option value="">-- Choose Medical Result --</option>
                <option value="Fit">Fit</option>
                <option value="Fit With Not">Fit With Not</option>
                <option value="Temporary Unfit">Temporary Unfit</option>
              </CFormSelect>
            </>
          )}

          {putTahapSeleksi !== 'Medical Check Up' && (
            <>
              <CFormLabel htmlFor="nilaitest">Test Score</CFormLabel>
              <CFormInput
                type="number"
                id="nilaitest"
                value={putGrade}
                onChange={(e) => setPutGrade(e.target.value)}
                className="mb-3"
              />
            </>
          )}
          <CFormLabel htmlFor="status">Selection Result</CFormLabel>
          <CFormSelect
            id="status"
            value={putStatus}
            onChange={(e) => setPutStatus(e.target.value)}
            className="mb-3"
          >
            <option defaultValue="">Choose Status</option>
            <option value="Lulus">Lulus</option>
            <option value="Tidak Lulus">Tidak Lulus</option>
          </CFormSelect>
          {putStatus !== 'Tidak Lulus' && (
            <>
              {putTahapSeleksi !== 'Induction' && (
                <>
                  <CFormLabel htmlFor="tahapanselanjutnya">Next Selection</CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="tahapanselanjutnya"
                    value={putNextSelection}
                    onChange={(e) => setPutNextSelection(e.target.value)}
                    className="mb-3"
                  >
                    <option value="">-- Pilih Seleksi --</option>
                    {selection.map((selection) => (
                      <option key={selection.name} value={selection.name}>
                        {selection.name}
                      </option>
                    ))}
                  </CFormSelect>

                  {putNextSelection === 'Wawancara' && (
                    <>
                      <CFormLabel htmlFor="interviewer">Interviewer</CFormLabel>
                      <CFormSelect
                        id="interviewer"
                        value={putInterviewer}
                        onChange={(e) => setPutInterviewer(e.target.value)}
                        className="mb-3"
                      >
                        <option value="">-- Choose Interviewer --</option>
                        {interviewer.map((interviewer) => (
                          <option key={interviewer.id} value={interviewer.id}>
                            {interviewer.name}
                          </option>
                        ))}
                      </CFormSelect>
                    </>
                  )}

                  <CFormLabel htmlFor="jadwalseleksi">Selection Schedule</CFormLabel>
                  <CFormInput
                    type="date"
                    id="jadwalseleksi"
                    value={putTimeSelection}
                    onChange={(e) => setPutTimeSelection(e.target.value)}
                    className="mb-3"
                  />

                  <CFormLabel htmlFor="waktuseleksi">Selection Time</CFormLabel>
                  <CFormInput
                    id="waktuseleksi"
                    type="time"
                    value={putTime}
                    onChange={(e) => setPutTime(e.target.value)}
                    className="mb-3"
                  ></CFormInput>

                  <CFormLabel htmlFor="timelineseleksi">Selection Timeline</CFormLabel>
                  <div className="App" id="timelineseleksi">
                    <CKEditor
                      data={putTimeTable}
                      editor={ClassicEditor}
                      onChange={(event, editor) => {
                        const data = editor.getData()
                        setPutTimeTable(data)
                      }}
                      className="mb-3"
                    />
                  </div>
                </>
              )}
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={() => setVisiblePass(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setLoading(true)
                handleSaveAll()
                setVisiblePass(!visiblePass)
              }}
              disabled={loading}
            >
              {loading ? 'LOADING...' : 'Save'}
            </Button>
          </Stack>
        </CModalFooter>
      </CModal>
      <CCard className="mb-5" id="exportL">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className="d-flex justify-content-center"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: '#0D4C92',
              }}
            >
              CANDIDATES PASSED DATA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <CCardBody className="d-flex justify-content-end align-items-center">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<UploadIcon />}
                    onClick={() => {
                      setPutPosition(data.position)
                      setPutSection(data.section)

                      setVisiblePass(!visiblePass)
                    }}
                  >
                    Input Result
                  </Button>
                  <Button variant="contained" startIcon={<UploadIcon />} onClick={importData}>
                    Upload Result
                  </Button>
                  <Button variant="contained" startIcon={<Download />} onClick={downloadData}>
                    Import Template
                  </Button>
                </Stack>
              </CCardBody>
              <DataGrid
                style={{ backgroundColor: 'white' }}
                checkboxSelection
                disableRowSelectionOnClick
                rows={applicant?.lulus ?? []}
                columns={data}
                pageSize={12}
                autoHeight
                onSelectionModelChange={selectedRows}
                selectionModel={selectedRows}
                onRowSelectionModelChange={handleSelectionChange}
                slots={{
                  toolbar: CustomToolbar,
                }}
              />
            </CCardBody>
          </AccordionDetails>
        </Accordion>
      </CCard>
      <CCard className="mb-5" id="exportL">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className="d-flex justify-content-center"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: '#0D4C92',
              }}
            >
              CANDIDATES NOT PASSED DATA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <DataGrid
                style={{ backgroundColor: 'white' }}
                rows={applicant?.gagal ?? []}
                columns={datas}
                pageSize={12}
                autoHeight
                slots={{
                  toolbar: CustomToolbar,
                }}
              />
            </CCardBody>
          </AccordionDetails>
        </Accordion>
      </CCard>
    </div>
  )
}

export default ResultCandidates
