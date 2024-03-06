import React, { useState } from 'react'
import {
  CCardBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'

import { useQuery, useMutation } from 'react-query'
import { getUser, deleteUser } from 'src/api/UserApi'
import Stack from '@mui/material/Stack'
import { toast } from 'react-toastify'
import Button from '@mui/material/Button'
import { useLocation } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'

const UserPage = () => {
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [user, setUser] = useState([])
  const [putName, setPutName] = useState('')
  const [deleteId, setDeleteId] = useState()
  const { state } = useLocation()

  // get user
  const { data: users, refetch } = useQuery('user', async () => {
    return await getUser(state)
  })

  // delete user
  const { mutate: userDelete } = useMutation(() => deleteUser(deleteId), {
    onSuccess: async (data) => {
      const res = user.filter((x) => x.id !== data.id)
      setUser(res)

      toast.success('Data berhasil dihapus', {
        autoClose: 1500,
      })
      await refetch()
    },
    onError: (err) => {
      toast.error(err.response.data.message, {
        autoClose: 1500,
      })
    },
  })

  const data = [
    { field: 'nik', headerName: 'NIK', width: 250 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'email', headerName: 'EMAIL', width: 300 },
    { field: 'verified', headerName: 'VERIFIED', width: 300 },
    { field: 'roles_id', headerName: 'ROLES', width: 300 },
    {
      field: '',
      headerName: 'ACTION',
      width: 200,
      renderCell: (params) => (
        <DeleteIcon
          onClick={() => {
            setDeleteId(params.row.id)
            setPutName(params.row.user)
            setVisibleDelete(!visibleDelete)
          }}
          style={{ cursor: 'pointer', color: 'red' }}
        />
      ),
    },
  ]

  return (
    <div>
      <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
        <CModalHeader style={{ color: '#0D4C92' }}>
          <CModalTitle>DELETE DATA</CModalTitle>
        </CModalHeader>
        <CModalBody>Are you sure you want to delete user data {putName} ?</CModalBody>
        <CModalFooter>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => {
                userDelete(deleteId)
                setVisibleDelete(false)
              }}
            >
              Delete
            </Button>
            <Button variant="outlined" onClick={() => setVisibleDelete(false)}>
              Cancel
            </Button>
          </Stack>
        </CModalFooter>
      </CModal>
      <h4 className="text-uppercase">
        <b>
          <center>
            <span className="text-center" style={{ fontFamily: 'Roboto' }}>
              USER
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
      <CCardBody style={{ marginTop: '60px' }}></CCardBody>
      <DataGrid
        style={{ backgroundColor: 'white' }}
        rows={users ?? []}
        columns={data}
        pageSize={12}
        autoHeight
      />
    </div>
  )
}

export default UserPage
