import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CFormLabel,
  CTableHeaderCell,
  CTableHead,
  CCardHeader,
} from '@coreui/react'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getApplicant } from 'src/api/ApplicationApi'
import { getApplicationFile } from 'src/api/ApplicationApi'
import { getDocumentJob } from 'src/api/ApplicationApi'
import { Button } from '@mui/material'

const ViewCandidates = () => {
  const { state } = useLocation()
  const [applicant, setApplicant] = useState([])
  const [document, setDocument] = useState([])

  // get applicant
  useQuery('applicant-interview', async () => {
    const data = await getApplicant(state.nik)
    setApplicant(data)
  })

  // get Document by Job
  useQuery('document-job', async () => {
    const data = await getDocumentJob(state.nik, state.jobs_id)
    setDocument(data)
  })

  const handleDownload = async (name) => {
    const data = await getApplicationFile(name)
    window.open(data, '_blank')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-center">
            <strong>DATA KANDIDAT</strong>
          </CCardHeader>
          <CCardBody>
            <CTable borderless>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell className="w-50">
                    <CFormLabel htmlFor="namalengkap">
                      <strong>Nama Lengkap :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.name}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell className="w-50">
                    <CFormLabel htmlFor="keahliankhusus">
                      <strong>Keahlian Khusus (sudah teruji/ tersertifikasi) :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.skills}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="upahdiharapkan">
                      <strong>Upah yang diharapkan setiap bulan :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.expected_salary}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="suku">
                      <strong>Suku :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.tribe}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="tempatlahir">
                      <strong>Tempat Lahir :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.place_of_birth}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="masakerjadiharapkan">
                      <strong>Masa kerja yang diharapkan :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.expected_working_time}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="tanggallahir">
                      <strong>Tanggal Lahir :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.date_of_birth}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="bersediashift">
                      <strong>
                        Apakah anda bersedia bekerja dengan sistem pembagian shift ? (shift pagi dan
                        malam) :
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
                      <strong>Jenis Kelamin :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.gender}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="bersediadepartemen">
                      <strong>Apakah anda bersedia ditempatkan didepartemen manapun ? :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.ready_any_department}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="tinggibadan">
                      <strong>Tinggi Badan :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.height}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="apakahkuliah">
                      <strong>Apakah saat ini anda sedang berkuliah ? :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.is_studying}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="beratbadan">
                      <strong>Berat Badan :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.weight}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="apakahbekerja">
                      <strong>Apakah saat ini anda sedang memiliki pekerjaan lainnya ? :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.is_working}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="statuspernikahan">
                      <strong>Status Pernikahan :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.marital_status}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="kendaraankerja">
                      <strong>Kendaraan yang akan digunakan untuk berangkat kerja :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.vehicle}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="memilikisim">
                      <strong>Apakah anda sudah memiliki SIM dan masih aktif (berlaku) ? :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.have_sim}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="ipk">
                      <strong>IPK :</strong>
                    </CFormLabel>
                    <p id="ipk" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.ipk}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="domisilibatam">
                      <strong>Domisili di Batam saat ini :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.address}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="memeliharakuku">
                      <strong>Apakah anda suka memelihara kuku hingga panjang ? :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.nail_long}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="agama">
                      <strong>Agama :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.religion}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="pernahrawatinap">
                      <strong>Apakah anda pernah rawat inap di rumah sakit ? :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.hospitalized}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="riwayatpenyakit">
                      <strong>Apakah anda memiliki riwayat penyakit ?, jika ya. Sebutkan :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.have_disease}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="apakahmerokok">
                      <strong>Apakah anda merokok ? :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.smoking}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="apakahkidal">
                      <strong>Apakah anda kidal ? :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.left_handed}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="apakahbisa_bedakanwarna">
                      <strong>Apakah anda dapat membedakan warna dengan baik ? :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.distinguish_colors}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="namasekolah">
                      <strong>Nama Sekolah/Universitas :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.school_name}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="apakahmantan_karyawansbi">
                      <strong>
                        Apakah anda sudah pernah bekerja di SBI ?, jika ya. Tulis NIK lama anda (6
                        digit), section, serta line tempat bekerja :
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
                        Apakah anda selalu bersedia untuk mematuhi semua aturan, pengaturan, maupun
                        kebijakan yang diterapkan oleh Perusahaan jika diterima bekerja ? :
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
                      <strong>Pengalaman kerja bukan di PT :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.work_experience_pt}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="totalpengalaman">
                      <strong>Total Pengalaman Kerja (0 bulan - tahun) :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.total_work_experience}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="namaperusahaan">
                      <strong>Nama Perusahaan (pernah bekerja) :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.company_name}
                    </p>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>
                    <CFormLabel htmlFor="deskripsipengalaman">
                      <strong>Deskripsi Pengalaman Kerja(Tahun-Posisi-Nama PT) :</strong>
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
                      <strong>Prestasi Khusus :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.special_achievements}
                    </p>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormLabel htmlFor="motivasikerja">
                      <strong>Motivasi dalam bekerja :</strong>
                    </CFormLabel>
                    <p id="namalengkap" className="bg-light bg-gradient py-2 px-3 rounded">
                      {applicant.motivation}
                    </p>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-center">
            <strong>DOKUMEN KANDIDAT</strong>
          </CCardHeader>
          <CCardBody>
            <CTable bordered responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">NO</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nama Document</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell className="text-center" scope="col">
                    Aksi
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell className="text-center" scope="row">
                    1
                  </CTableHeaderCell>
                  <CTableDataCell>Scan Ijazah</CTableDataCell>
                  <CTableDataCell>
                    {' '}
                    {document.ijazah === '' || !document.ijazah ? 'Belum Upload' : 'Sudah Upload'}
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    {document.ijazah === '' || !document.ijazah ? (
                      <Button variant="outlined">Open file</Button>
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
                    2
                  </CTableHeaderCell>
                  <CTableDataCell>Scan Transkip Nilai</CTableDataCell>
                  <CTableDataCell>
                    {' '}
                    {document.transkip === '' || !document.transkip
                      ? 'Belum Upload'
                      : 'Sudah Upload'}
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    {document.transkip === '' || !document.transkip ? (
                      <Button variant="outlined">Open file</Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleDownload(document.transkip)
                        }}
                      >
                        Open file
                      </Button>
                    )}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell className="text-center" scope="row">
                    3
                  </CTableHeaderCell>
                  <CTableDataCell>Scan Sertifikat Kompetensi/Keahlian</CTableDataCell>
                  <CTableDataCell>
                    {' '}
                    {document.competency_certificate === '' || !document.competency_certificate
                      ? 'Belum Upload'
                      : 'Sudah Upload'}
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    {document.competency_certificate === '' || !document.competency_certificate ? (
                      <Button variant="outlined">Open file</Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleDownload(document.competency_certificate)
                        }}
                      >
                        Open file
                      </Button>
                    )}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell className="text-center" scope="row">
                    4
                  </CTableHeaderCell>
                  <CTableDataCell>Scan Piagam Penghargaan/Prestasi</CTableDataCell>
                  <CTableDataCell>
                    {' '}
                    {document.achievements_certificate === '' || !document.achievements_certificate
                      ? 'Belum Upload'
                      : 'Sudah Upload'}
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    {document.achievements_certificate === '' ||
                    !document.achievements_certificate ? (
                      <Button variant="outlined">Open file</Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleDownload(document.achievements_certificate)
                        }}
                      >
                        Open file
                      </Button>
                    )}
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell className="text-center" scope="row">
                    5
                  </CTableHeaderCell>
                  <CTableDataCell>Scan Surat Pengalaman Kerja</CTableDataCell>
                  <CTableDataCell>
                    {' '}
                    {document.work_experience_letter === '' || !document.work_experience_letter
                      ? 'Belum Upload'
                      : 'Sudah Upload'}
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    {document.work_experience_letter === '' || !document.work_experience_letter ? (
                      <Button variant="outlined">Open file</Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleDownload(document.work_experience_letter)
                        }}
                      >
                        Open file
                      </Button>
                    )}
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ViewCandidates
