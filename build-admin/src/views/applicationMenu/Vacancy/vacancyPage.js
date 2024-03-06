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
  CFormLabel,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilTrash, cilColorBorder, cilFeaturedPlaylist } from '@coreui/icons'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useQuery, useMutation } from 'react-query'
import { deleteJob, getJob, postJob, putJob } from 'src/api/VacancyApi'
import { getSection } from 'src/api/SectionApi'
import { TableInfo } from 'src/views/widgets/InfoTable'
import parse from 'html-react-parser'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import jwtDecode from 'jwt-decode'

const VacancyPage = () => {
  const { name } = jwtDecode(window.localStorage.getItem('accessToken'))
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleUpdate, setVisibleUpdate] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [postCreateBy, setPutCreateBy] = useState(name)
  const [job, setJob] = useState([])
  const [postPosition, setPostPosition] = useState('')
  const [postSection, setPostSection] = useState('')
  const [postQualification, setPostQualification] = useState('')
  const [postEstimatedJoining, setPostEstimatedJoining] = useState('')
  const [postTimeline, setPostTimeline] = useState('')
  const [postApplicationOpen, setPostApplicationOpen] = useState('')
  const [postApplicationClose, setPostApplicationClose] = useState('')
  const [postAboutCompany, setPostAboutCompany] = useState('')
  const [putPosition, setPutPosition] = useState('')
  const [putSection, setPutSection] = useState('')
  const [putQualification, setPutQualification] = useState('')
  const [putEstimatedJoining, setPutEstimatedJoining] = useState('')
  const [putTimeline, setPutTimeline] = useState('')
  const [putApplicationOpen, setPutApplicationOpen] = useState('')
  const [putApplicationClose, setPutApplicationClose] = useState('')
  const [putAboutCompany, setPutAboutCompany] = useState('')
  const [putStatus, setPutStatus] = useState()
  const [putId, setPutId] = useState()
  const [section, setSection] = useState([])
  const [deleteId, setDeleteId] = useState()
  const [loading, setLoading] = useState(false)

  // get Section
  useQuery('section', async () => {
    const data = await getSection()
    setSection(data)
  })

  // get job
  const {
    isError: jobGetIsError,
    isLoading: jobGetIsLoading,
    error: jobGetError,
    refetch,
  } = useQuery('job', async () => {
    const data = await getJob()
    setJob(data)
  })

  // post job
  const { mutate: jobPost } = useMutation(
    () =>
      postJob({
        position: postPosition,
        section: postSection,
        qualification: postQualification,
        estimated_joining: postEstimatedJoining,
        timeline: postTimeline,
        application_open: postApplicationOpen,
        application_close: postApplicationClose,
        about_company: postAboutCompany,
        create_by: postCreateBy,
      }),
    {
      onSuccess: async () => {
        setLoading(false)
        setPostPosition('')
        setPostSection('')
        setPostQualification('')
        setPostEstimatedJoining('')
        setPostTimeline('')
        setPostApplicationOpen('')
        setPostApplicationClose('')
        setPostAboutCompany('')
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

  // put job
  const { mutate: jobPut } = useMutation(
    () =>
      putJob(putId, {
        position: putPosition,
        section: putSection,
        qualification: putQualification,
        estimated_joining: putEstimatedJoining,
        timeline: putTimeline,
        application_open: putApplicationOpen,
        application_close: putApplicationClose,
        about_company: putAboutCompany,
        status: putStatus,
      }),
    {
      onSuccess: async () => {
        setLoading(false)
        setPutPosition('')
        setPutSection('')
        setPutQualification('')
        setPutEstimatedJoining('')
        setPutTimeline('')
        setPutApplicationOpen('')
        setPutApplicationClose('')
        setPutAboutCompany('')
        setPutStatus()
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
    },
  )

  const { mutate: jobDelete } = useMutation(() => deleteJob(deleteId), {
    onSuccess: async (data) => {
      setLoading(false)
      const res = job.filter((x) => x.id !== data.id)
      setJob(res)
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

  // show detail
  const navigate = useNavigate()
  const showDetail = (id) => {
    navigate('/vacancyDetail/', { state: id })
  }

  return (
    <div>
      <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
        <CModalHeader style={{ color: '#0D4C92' }}>
          <CModalTitle>Delete Data</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure you want to delete the position vacancy data {putPosition} ?
        </CModalBody>
        <CModalFooter>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => {
                setLoading(true)
                jobDelete()
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
      <CModal visible={visibleUpdate} onClose={() => setVisibleUpdate(false)}>
        <CModalHeader style={{ color: '#0D4C92' }}>
          <CModalTitle>UPDATE VACANCIES</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormLabel htmlFor="posisi">POSITON</CFormLabel>
          <CFormInput
            type="text"
            id="posisi"
            aria-label="sm input example"
            value={putPosition}
            onChange={(e) => setPutPosition(e.target.value)}
            className="mb-3"
          />

          <CFormLabel htmlFor="perkiraantanggalbergabung">JOIN DATE</CFormLabel>
          <CFormInput
            type="date"
            id="perkiraantanggalbergabung"
            aria-label="sm input example"
            value={putEstimatedJoining}
            onChange={(e) => setPutEstimatedJoining(e.target.value)}
            className="mb-3"
          />

          <CFormLabel htmlFor="section">SECTION</CFormLabel>
          <CFormSelect
            id="section"
            className="mb-3"
            aria-label="sm select example"
            value={putSection}
            onChange={(e) => setPutSection(e.target.value)}
          >
            <option value="">-- Choose Section --</option>
            {section.map((section) => (
              <option key={section.name} value={section.name}>
                {section.name}
              </option>
            ))}
          </CFormSelect>

          <CFormLabel htmlFor="status">STATUS</CFormLabel>
          <CFormSelect
            id="status"
            className="mb-3"
            aria-label="sm input example"
            value={putStatus}
            onChange={(e) => setPutStatus(e.target.value)}
          >
            <option value="1">OPEN</option>
            <option value="0">CLOSE</option>
          </CFormSelect>

          <CFormLabel htmlFor="applicationOpen">OPEN REGISTRATION</CFormLabel>
          <CFormInput
            type="date"
            id="applicationOpen"
            className="mb-3"
            value={putApplicationOpen}
            aria-label="sm input example"
            onChange={(e) => setPutApplicationOpen(e.target.value)}
          />

          <CFormLabel htmlFor="applicationClose">s.d</CFormLabel>
          <CFormInput
            size="sm"
            type="date"
            id="applicationClose"
            value={putApplicationClose}
            onChange={(e) => setPutApplicationClose(e.target.value)}
          />

          <CFormLabel htmlFor="persyaratankualifikasi" className="mt-3">
            REQUIREMENTS & QUALIFICATION
          </CFormLabel>

          <CKEditor
            data={putQualification}
            editor={ClassicEditor}
            onChange={(event, editor) => {
              const data = editor.getData()
              setPutQualification(data)
            }}
          />

          <CFormLabel htmlFor="timelinerecruitment" className="mt-3">
            TIMELINE REQUIREMENTS & SELECTION
          </CFormLabel>

          <CKEditor
            data={putTimeline}
            editor={ClassicEditor}
            onChange={(event, editor) => {
              const data = editor.getData()
              setPutTimeline(data)
            }}
          />

          <CFormLabel htmlFor="tentangperusahaan" className="mt-3">
            ABOUT COMPANY
          </CFormLabel>

          <CKEditor
            data={putAboutCompany}
            editor={ClassicEditor}
            onChange={(event, editor) => {
              const data = editor.getData()
              setPutAboutCompany(data)
            }}
            className="mb-3"
          />

          <CModalFooter>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={() => setVisibleUpdate(false)}>
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setLoading(true)
                  jobPut(job.id)
                  setVisibleUpdate(false)
                }}
                disabled={loading}
              >
                {loading ? 'LOADING...' : 'Update'}
              </Button>
            </Stack>
          </CModalFooter>
        </CModalBody>
      </CModal>
      <h4 className="text-uppercase">
        <b>
          <center>
            <span className="text-center" style={{ fontFamily: 'Roboto' }}>
              VACANCIES
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
        <div className="row mb-3">
          <div className="d-flex flex-nowrap">
            <div>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setVisibleAdd(!visibleAdd)}
              >
                ADD DATA
              </Button>
              <CModal visible={visibleAdd} onClose={() => setVisibleAdd(false)}>
                <CModalHeader style={{ color: '#0D4C92' }}>
                  <CModalTitle>ADD VACANCIES</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CFormLabel htmlFor="posisi">POSITON</CFormLabel>
                  <CFormInput
                    type="text"
                    id="posisi"
                    aria-label="sm input example"
                    value={postPosition}
                    onChange={(e) => setPostPosition(e.target.value)}
                    className="mb-3"
                  />

                  <CFormLabel htmlFor="perkiraantanggalbergabung">JOIN DATE</CFormLabel>
                  <CFormInput
                    type="date"
                    id="perkiraantanggalbergabung"
                    aria-label="sm input example"
                    value={postEstimatedJoining}
                    onChange={(e) => setPostEstimatedJoining(e.target.value)}
                    className="mb-3"
                  />

                  <CFormLabel htmlFor="section">SECTION</CFormLabel>
                  <CFormSelect
                    id="section"
                    className="mb-3"
                    aria-label="Small select example"
                    value={postSection}
                    onChange={(e) => setPostSection(e.target.value)}
                  >
                    <option value="">-- Choose Section --</option>
                    {section.map((section) => (
                      <option key={section.name} value={section.name}>
                        {section.name}
                      </option>
                    ))}
                  </CFormSelect>

                  <CFormLabel htmlFor="section">OPEN REGISTRATION</CFormLabel>
                  <CFormInput
                    type="date"
                    id="section"
                    aria-label="sm input example"
                    value={postApplicationOpen}
                    onChange={(e) => setPostApplicationOpen(e.target.value)}
                    className="mb-3"
                  />

                  <CFormLabel htmlFor="section">s.d</CFormLabel>
                  <CFormInput
                    type="date"
                    id="section"
                    aria-label="sm input example"
                    value={postApplicationClose}
                    onChange={(e) => setPostApplicationClose(e.target.value)}
                    className="mb-3"
                  />

                  <CFormLabel htmlFor="persyaratankualifikasi" className="mt-3">
                    REQUIREMENTS & QUALIFICATION
                  </CFormLabel>

                  <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                      const data = editor.getData()
                      setPostQualification(data)
                    }}
                    value={postQualification}
                    className="App"
                    id="persyaratankualifikasi"
                  />

                  <CFormLabel htmlFor="timelinerecruitment" className="mt-3">
                    TIMELINE REQUIREMENTS & SELECTION
                  </CFormLabel>

                  <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                      const data = editor.getData()
                      setPostTimeline(data)
                    }}
                    value={postTimeline}
                    className="App"
                    id="timelinerecruitment"
                  />

                  <CFormLabel htmlFor="tentangperusahaan" className="mt-3">
                    ABOUT COMPANY
                  </CFormLabel>

                  <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                      const data = editor.getData()
                      setPostAboutCompany(data)
                    }}
                    value={postAboutCompany}
                    className="App"
                    id="tentangperusahaan"
                  />

                  <CModalFooter>
                    <Stack direction="row" spacing={2}>
                      <Button variant="outlined" onClick={() => setVisibleAdd(false)}>
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => {
                          setLoading(true)
                          jobPost()
                          setVisibleAdd(false)
                        }}
                        disabled={loading}
                      >
                        {loading ? 'LOADING...' : 'Add Data'}
                      </Button>
                    </Stack>
                  </CModalFooter>
                </CModalBody>
              </CModal>
            </div>
          </div>
        </div>
        <CTable bordered responsive className="bg-white">
          <CTableHead>
            <CTableRow style={{ fontFamily: 'Roboto' }}>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">No</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Position</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Section</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Open Registration</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Close Registration</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Requirements & Qualification</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Timeline Requirement & Selection</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Join Date</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">About Company</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Post At</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Status</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Create By</p>
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <p className="d-flex justify-content-center">Action</p>
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <TableInfo
              stsload={jobGetIsLoading}
              stserror={jobGetIsError}
              msg={jobGetError?.message}
              count={job?.length}
              col={12}
            />
            {job.map((job, i) => (
              <CTableRow key={job.id}>
                <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                <CTableDataCell>{job.position}</CTableDataCell>
                <CTableDataCell>{job.section}</CTableDataCell>
                <CTableDataCell>{job.application_open}</CTableDataCell>
                <CTableDataCell>{job.application_close}</CTableDataCell>
                <CTableDataCell>{parse(job.qualification)}</CTableDataCell>
                <CTableDataCell>{parse(job.timeline)}</CTableDataCell>
                <CTableDataCell>{job.estimated_joining}</CTableDataCell>
                <CTableDataCell>{parse(job.about_company)}</CTableDataCell>
                <CTableDataCell>{job.updatedAt}</CTableDataCell>
                <CTableDataCell>{job.status === 1 ? 'dibuka' : 'ditutup'}</CTableDataCell>
                <CTableDataCell>{job.create_by}</CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-center">
                    <CButton
                      size="sm"
                      className="me-3"
                      color="primary"
                      onClick={() => {
                        showDetail(job.id)
                      }}
                    >
                      <CIcon icon={cilFeaturedPlaylist} />
                    </CButton>
                    <CButton
                      size="sm"
                      color="warning"
                      style={{ color: 'white' }}
                      onClick={() => {
                        setPutId(job.id)
                        setPutPosition(job.position)
                        setPutSection(job.section)
                        setPutQualification(job.qualification)
                        setPutEstimatedJoining(job.estimated_joining)
                        setPutTimeline(job.timeline)
                        setPutApplicationOpen(job.application_open)
                        setPutApplicationClose(job.application_close)
                        setPutAboutCompany(job.about_company)
                        setPutStatus(job.status)
                        setVisibleUpdate(!visibleUpdate)
                      }}
                    >
                      <CIcon icon={cilColorBorder} />
                    </CButton>

                    <CButton
                      className="ms-3"
                      style={{ color: 'white', backgroundColor: 'red', borderColor: 'red' }}
                      size="sm"
                      onClick={() => {
                        setDeleteId(job.id)
                        setPutPosition(job.position)
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

export default VacancyPage
