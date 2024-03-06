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
import { getSection, postSection, putSection, deleteSection } from 'src/api/SectionApi'
import { TableInfo } from '../widgets/InfoTable'
import { toast } from 'react-toastify'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const SectionM = () => {
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleUpdate, setVisibleUpdate] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [section, setSection] = useState([])
  const [postName, setPostName] = useState('')
  const [putName, setPutName] = useState('')
  const [putId, setPutId] = useState()
  const [deleteId, setDeleteId] = useState()
  const [loading, setLoading] = useState(false)

  // get section
  const {
    isError: sectionGetIsError,
    isLoading: sectionGetIsLoading,
    error: sectionGetError,
    refetch,
  } = useQuery('section', async () => {
    const data = await getSection()
    setSection(data)
  })

  // post section
  const { mutate: sectionPost } = useMutation(() => postSection({ name: postName }), {
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

  // put section
  const { mutate: sectionPut } = useMutation(() => putSection(putId, { name: putName }), {
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

  const { mutate: sectionDelete } = useMutation(() => deleteSection(deleteId), {
    onSuccess: async (data) => {
      setLoading(false)
      const res = section.filter((x) => x.id !== data.id)
      setSection(res)
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
              SECTION
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
        <CModal backdrop="static" visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
          <CModalHeader style={{ color: '#0D4C92' }}>
            <CModalTitle>DELETE DATA</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure you want to delete the data section {putName} ?</CModalBody>
          <CModalFooter>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => {
                  setLoading(true)
                  sectionDelete(deleteId)
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
            <CModalTitle>UPDATE SELECTION</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CTable borderless>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">SECTION NAME</CTableHeaderCell>
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
                  sectionPut(section.id)
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
              <CModalTitle>ADD SECTION</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CTable borderless>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">SECTION NAME</CTableHeaderCell>
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
                    sectionPost()
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
              <CTableHeaderCell scope="col">SECTION NAME</CTableHeaderCell>
              <CTableHeaderCell scope="col">
                <div className="d-flex justify-content-center">ACTION</div>
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <TableInfo
              stsload={sectionGetIsLoading}
              stserror={sectionGetIsError}
              msg={sectionGetError?.message}
              count={section?.length}
              col={5}
            />
            {section?.map((section, i) => (
              <CTableRow key={section.id}>
                <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                <CTableDataCell>{section.name} </CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex justify-content-center">
                    <CButton
                      className="me-3"
                      style={{ color: 'white' }}
                      color="warning"
                      size="sm"
                      onClick={() => {
                        setPutId(section.id)
                        setPutName(section.name)
                        setVisibleUpdate(!visibleUpdate)
                      }}
                    >
                      <CIcon icon={cilColorBorder} />
                    </CButton>
                    <CButton
                      style={{ color: 'white', backgroundColor: 'red', borderColor: 'red' }}
                      size="sm"
                      onClick={() => {
                        setDeleteId(section.id)
                        setPutName(section.name)
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

export default SectionM
