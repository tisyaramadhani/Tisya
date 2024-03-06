import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormLabel,
  CCardHeader,
} from '@coreui/react'

import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import {
  getApplicationById,
  getApplicant,
  getDocumentJob,
  getApplicationFile,
} from '../../api/ApplicationApi'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TableInfo } from '../widgets/InfoTable'
import { getApplicationByApplicant } from '../../api/ApplicationApi'
import { Button } from '@mui/material'

const DataApplicant = () => {
  const { state } = useLocation()

  const [applicant, setApplicant] = useState([])
  const [application, setApplication] = useState([])
  const [putId] = useState()
  const [document, setDocument] = useState([])

  useQuery('application', async () => {
    const data = await getApplicationByApplicant(state.nik)
    setApplication(data)
  })

  useQuery('applicant', async () => {
    const data = await getApplicant(state.nik)

    setApplicant(data)
  })

  useQuery('application', async () => {
    const data = await getApplicationById(putId)

    setApplication(data)
  })

  useQuery('document-job', async () => {
    const data = await getDocumentJob(state.nik, state.jobs_id)
    setDocument(data)
  })

  const handleDownload = async (name) => {
    const data = await getApplicationFile(name)
    window.open(data, '_blank')
  }

  return (
    <div>
      <CCard className="mb-4">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#0D4C92' }}>
              CV ONLINE CANDIDATES
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <CTable borderless>
                <CTableBody>
                  <CTableRow key={applicant}>
                    <CTableDataCell className="w-50">
                      <CFormLabel htmlFor="namalengkap">
                        <strong>Full Name :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.name}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell className="w-50">
                      <CFormLabel htmlFor="keahliankhusus">
                        <strong>Specific Skills (tested/certified):</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.skills}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="noktp">
                        <strong>No KTP :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.nik}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="upahdiharapkan">
                        <strong>Expected wages each month :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.expected_salary}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="tempatlahir">
                        <strong>Place of birth :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.place_of_birth}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="masakerjadiharapkan">
                        <strong>Expected working time :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.expected_working_time}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="tanggallahir">
                        <strong>Date of birth :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.date_of_birth}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="bersediashift">
                        <strong>
                          Are you willing to work with a shift distribution system? (morning shift
                          and Evening) :
                        </strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.ready_shift}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="jeniskelamin">
                        <strong>Gender :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.gender}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="bersediadepartemen">
                        <strong>Are you willing to be placed in any department? :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.ready_any_department}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="tinggibadan">
                        <strong>Height :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.height}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="apakahkuliah">
                        <strong>Are you currently studying? :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.is_studying}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="beratbadan">
                        <strong>Weight :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.weight}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="apakahbekerja">
                        <strong>Do you currently have another job? :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.is_working}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="statuspernikahan">
                        <strong>Marital status :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.marital_status}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="kendaraankerja">
                        <strong>The vehicle to be used to go to work :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.vehicle}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="alamatktp">
                        <strong>The address on the KTP:</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.address_ktp}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="memilikisim">
                        <strong>Do you already have a SIM and it is still active (valid)? :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.have_sim}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="domisilibatam">
                        <strong>Current domicile in Batam:</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.address}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="memeliharakuku">
                        <strong>Do you like to keep your nails long? :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.nail_long}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="agama">
                        <strong>Religion :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.religion}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="pernahrawatinap">
                        <strong>Have you ever been hospitalized? :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.hospitalized}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="namaibukandung">
                        <strong>Biological mother name :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.biological_mother_name}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="riwayatpenyakit">
                        <strong>Do you have a history of disease?, if yes. Name it :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.have_disease}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="namalengkapayah">
                        <strong>Father Full Name :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.father_name}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="apakahmerokok">
                        <strong>Do you smoke ? :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.smoking}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="namalengkapibu">
                        <strong>Mother Full Name:</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.mother_name}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="apakahkidal">
                        <strong>Are you left-handed? :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.left_handed}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="npwp">
                        <strong>NPWP :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.npwp}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="apakahbisa_bedakanwarna">
                        <strong>Can you distinguish colors well? :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.distinguish_colors}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="namasekolah">
                        <strong>Name of School/University :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.school_name}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="apakahmantan_karyawansbi">
                        <strong>
                          Have you ever worked at SBI?, ​​if yes. Write down your old NIK (6
                          digits), section, and line where to work:
                        </strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.ever_worked_sbi}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="jurusan">
                        <strong>Jurusan :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.major}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="mematuhiaturan">
                        <strong>
                          Are you always willing to comply with all rules, arrangements, or policies
                          implemented by the Company if hired? :
                        </strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.ready_follow_rulles}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="tahunlulus">
                        <strong>Tahun Lulus :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.graduation_year}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="pengalamanbukanpt">
                        <strong>Work experience not at PT :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.work_experience_pt}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="totalpengalaman">
                        <strong>Total Work Experience (0 months - years) :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.total_work_experience}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="namaperusahaan">
                        <strong>Company name (previously worked) :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.company_name}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="deskripsipengalaman">
                        <strong>Work Experience Description(Year-Position-Name of PT) :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.experience_description}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="hobby">
                        <strong>Hobby :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.hobby}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="prestasikhusus">
                        <strong>Special Achievements :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.special_achievements}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="motivasikerja">
                        <strong>Motivation at work :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.motivation}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="suku">
                        <strong>Ethnic :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.tribe}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="nohpaktif">
                        <strong>Active mobile no :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.no_hp}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <CFormLabel htmlFor="nowaaktif">
                        <strong>Active WA no :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.no_wa}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormLabel htmlFor="email">
                        <strong>Email address :</strong>
                      </CFormLabel>
                      <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                        {applicant.email}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </AccordionDetails>
        </Accordion>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader
          style={{
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            color: '#0D4C92',
            background: '#FFFFFF',
          }}
        >
          <strong>DOCUMENT CANDIDATES</strong>
        </CCardHeader>
        <CCardBody>
          <CTable bordered responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">NO</CTableHeaderCell>
                <CTableHeaderCell scope="col">DOCUMENT</CTableHeaderCell>
                <CTableHeaderCell scope="col">STATUS</CTableHeaderCell>
                <CTableHeaderCell className="text-center" scope="col">
                  ACTION
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  1
                </CTableHeaderCell>
                <CTableDataCell>Surat Lamaran Kerja</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.application_letter === '' || !document.application_letter
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.application_letter === '' || !document.application_letter ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => handleDownload(document.application_letter)}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  2
                </CTableHeaderCell>
                <CTableDataCell>Form CV PT SBI</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.cv === '' || !document.cv ? 'Belum Upload' : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.cv === '' || !document.cv ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.cv)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  3
                </CTableHeaderCell>
                <CTableDataCell>Scan KTP</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.ktp === '' || !document.ktp ? 'Belum Upload' : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.ktp === '' || !document.ktp ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.ktp)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  4
                </CTableHeaderCell>
                <CTableDataCell>Scan Ijazah</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.ijazah === '' || !document.ijazah ? 'Belum Upload' : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.ijazah === '' || !document.ijazah ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.ijazah)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  5
                </CTableHeaderCell>
                <CTableDataCell>Pas Foto 3x4 Berwarna</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.photo === '' || !document.photo ? 'Belum Upload' : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.photo === '' || !document.photo ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.photo)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  6
                </CTableHeaderCell>
                <CTableDataCell>Surat Keterangan Sehat</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.health_certificate === '' || !document.health_certificate
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.health_certificate === '' || !document.health_certificate ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.health_certificate)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  7
                </CTableHeaderCell>
                <CTableDataCell>Scan Kartu Keluarga</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.kk === '' || !document.kk ? 'Belum Upload' : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.kk === '' || !document.kk ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.kk)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  8
                </CTableHeaderCell>
                <CTableDataCell>Surat Pernyataan Aturan Kerja</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.follow_rulles_letter === '' || !document.follow_rulles_letter
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.follow_rulles_letter === '' || !document.follow_rulles_letter ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.follow_rulles_letter)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  9
                </CTableHeaderCell>
                <CTableDataCell>Scan Surat Pengalaman Kerja</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.work_experience_letter === '' || !document.work_experience_letter
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.work_experience_letter === '' || !document.work_experience_letter ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.work_experience_letter)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  10
                </CTableHeaderCell>
                <CTableDataCell>Scan Kartu NPWP</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.npwp_letter === '' || !document.npwp_letter
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.npwp_letter === '' || !document.npwp_letter ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.npwp_letter)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  11
                </CTableHeaderCell>
                <CTableDataCell>Scan Kartu BPJS Kesehatan</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.bpjs_kesehatan === '' || !document.bpjs_kesehatan
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.bpjs_kesehatan === '' || !document.bpjs_kesehatan ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.bpjs_kesehatan)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  12
                </CTableHeaderCell>
                <CTableDataCell>Scan BPJS Ketenagakerjaan</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.bpjs_ketenagakerjaan === '' || !document.bpjs_ketenagakerjaan
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.bpjs_ketenagakerjaan === '' || !document.bpjs_kesehatan ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.bpjs_ketenagakerjaan)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  13
                </CTableHeaderCell>
                <CTableDataCell>Scan Piagam Penghargaan/Prestasi</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.achievements_certificate === '' || !document.achievements_certificate
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.achievements_certificate === '' ||
                  !document.achievements_certificate ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.achievements_certificate)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  14
                </CTableHeaderCell>
                <CTableDataCell>SKCK</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.skck === '' || !document.skck ? 'Belum Upload' : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.skck === '' || !document.skck ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.skck)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  15
                </CTableHeaderCell>
                <CTableDataCell>Scan Sertifikat Kompetensi/Keahlian</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.competency_certificate === '' || !document.competency_certificate
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.competency_certificate === '' || !document.competency_certificate ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.competency_certificate)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  16
                </CTableHeaderCell>
                <CTableDataCell>Scan Sertifikat Vaksin</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.vaccine_certificate === '' || !document.vaccine_certificate
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.vaccine_certificate === '' || !document.vaccine_certificate ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.vaccine_certificate)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  17
                </CTableHeaderCell>
                <CTableDataCell>Surat Hasil Rapid Test</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.rapid_test_letter === '' || !document.rapid_test_letter
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.rapid_test_letter === '' || !document.rapid_test_letter ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.rapid_test_letter)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell className="text-center" scope="row">
                  18
                </CTableHeaderCell>
                <CTableDataCell>Surat Keterangan Domisili Saat Ini</CTableDataCell>
                <CTableDataCell>
                  {''}
                  {document.domicile_letter === '' || !document.domicile_letter
                    ? 'Belum Upload'
                    : 'Sudah Upload'}
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  {document.domicile_letter === '' || !document.domicile_letter ? (
                    <Button variant="outlined">Open File</Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleDownload(document.domicile_letter)
                      }}
                    >
                      Open File
                    </Button>
                  )}
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader
          style={{
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            color: '#0D4C92',
            background: '#FFFFFF',
          }}
        >
          <strong>APPLICATION LIST</strong>
        </CCardHeader>
        <CCardBody>
          <CTable bordered responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">NO</CTableHeaderCell>
                <CTableHeaderCell scope="col">NO PENDAFTARAN</CTableHeaderCell>
                <CTableHeaderCell scope="col">NIK</CTableHeaderCell>
                <CTableHeaderCell scope="col">NAMA</CTableHeaderCell>
                <CTableHeaderCell scope="col">POSISI</CTableHeaderCell>
                <CTableHeaderCell scope="col">SECTION</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <TableInfo />
              {application?.map((app, i) => (
                <CTableRow key={app.id}>
                  <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                  <CTableDataCell>{app.no_test}</CTableDataCell>
                  <CTableDataCell>{app.applicants_nik}</CTableDataCell>
                  <CTableDataCell>{app.name}</CTableDataCell>
                  <CTableDataCell>{app.position}</CTableDataCell>
                  <CTableDataCell>{app.section}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default DataApplicant
