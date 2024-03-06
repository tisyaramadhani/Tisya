import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import { useLocation } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { deleteAttendance, getApplicationByJobAtten } from 'src/api/ApplicationApi'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import { toast } from 'react-toastify'
import { Stack } from '@mui/material'

const AttenCandidates = () => {
  const { state } = useLocation()

  const { data: yes, refetch } = useQuery('application-job-atten', async () => {
    return await getApplicationByJobAtten(state)
  })

  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleDeleteNo, setVisibleDeleteNo] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [selectedRowsNo, setSelectedRowsNo] = useState([])

  const data = [
    { field: 'checkbox', headerName: '', width: 50, checkboxSelection: true },
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'no_test', headerName: 'NO TEST', width: 150 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'email', headerName: 'EMAIL', width: 300 },
    { field: 'position', headerName: 'POSITION', width: 300 },
    { field: 'next_selection', headerName: 'SELECTION STAGE', width: 250 },
    { field: 'gender', headerName: 'GENDER', width: 250 },
    { field: 'domisili', headerName: 'DOMISILI', width: 150 },
    { field: 'kehadiran', headerName: 'KEHADIRAN', width: 150 },
  ]

  const handleSelectionChange = (params) => {
    const selectedRowsData = params.map((id) => {
      const row = Array.isArray(yes.ya) ? yes.ya.find((row) => row.id === id) : null
      return { ...row, id: row?.id }
    })
    setSelectedRows(selectedRowsData.filter((row) => row !== null))
  }

  const deleteData = useMutation(deleteAttendance, {
    onSuccess: () => {
      refetch()
      toast.success('Sukses menghapus data', { autoClose: 1500 })
    },
    onError: (err) => {
      toast.error(err.response.data.message, { autoClose: 1500 })
    },
  })

  const handleDelete = () => {
    const members = selectedRows.map(({ id }) => id)
    deleteData.mutate(members)
    setVisibleDelete(false)
  }

  //Atten No
  const handleSelectionChangeNo = (params) => {
    const selectedRowsData = params.map((id) => {
      const row = Array.isArray(yes.tidak) ? yes.tidak.find((row) => row.id === id) : null
      return { ...row, id: row?.id }
    })
    setSelectedRows(selectedRowsData.filter((row) => row !== null))
  }

  const deleteDataNo = useMutation(deleteAttendance, {
    onSuccess: () => {
      refetch()
      toast.success('Sukses menghapus data', { autoClose: 1500 })
    },
    onError: (err) => {
      toast.error(err.response.data.message, { autoClose: 1500 })
    },
  })

  const handleDeleteNo = () => {
    const members = selectedRows.map(({ id }) => id)
    deleteDataNo.mutate(members)
    setVisibleDeleteNo(false)
  }

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    )
  }

  return (
    <div style={{ marginTop: '80px' }}>
      <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
        <CModalHeader style={{ color: '#0D4C92' }}>
          <CModalTitle>Delete Data</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete attendance ?</CModalBody>
        <CModalFooter>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => handleDelete()}>
              Delete
            </Button>
            <Button variant="outlined" onClick={() => setVisibleDelete(false)}>
              Cancel
            </Button>
          </Stack>
        </CModalFooter>
      </CModal>
      <CModal visible={visibleDeleteNo} onClose={() => setVisibleDeleteNo(false)}>
        <CModalHeader style={{ color: '#0D4C92' }}>
          <CModalTitle>Delete Data</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete attendance ?</CModalBody>
        <CModalFooter>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => handleDeleteNo()}>
              Delete
            </Button>
            <Button variant="outlined" onClick={() => setVisibleDeleteNo(false)}>
              Cancel
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
              CANDIDATES PRESENT
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <CCardBody className="d-flex justify-content-end align-items-center">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      setVisibleDelete(!visibleDelete)
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              </CCardBody>
              <DataGrid
                style={{ backgroundColor: 'white' }}
                checkboxSelection
                disableRowSelectionOnClick
                rows={yes?.ya ?? []}
                columns={data}
                pageSize={12}
                autoHeight
                onSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
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
              CANDIDATES ABSENT
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CCardBody>
              <CCardBody className="d-flex justify-content-end align-items-center">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      setVisibleDeleteNo(!visibleDeleteNo)
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              </CCardBody>
              <DataGrid
                style={{ backgroundColor: 'white' }}
                checkboxSelection
                disableRowSelectionOnClick
                rows={yes?.tidak ?? []}
                columns={data}
                pageSize={12}
                autoHeight
                onSelectionModelChange={(newSelection) => setSelectedRowsNo(newSelection)}
                selectionModel={selectedRowsNo}
                onRowSelectionModelChange={handleSelectionChangeNo}
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

export default AttenCandidates
