import React from 'react'
import { CCardBody } from '@coreui/react'
import { useQuery } from 'react-query'
import { getApplicationByStatusGagal } from 'src/api/ApplicationApi'
import { useLocation } from 'react-router-dom'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

const NotPass = () => {
  const { state } = useLocation()
  const { data: gagal } = useQuery('application-status-gagal', async () => {
    return await getApplicationByStatusGagal(state)
  })

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    )
  }

  const data = [
    { field: 'no_test', headerName: 'NO TEST', width: 250 },
    { field: 'name', headerName: 'NAME', width: 300 },
    { field: 'position', headerName: 'POSITION', width: 300 },
    { field: 'section', headerName: 'SECTION', width: 300 },
    { field: 'tahap_seleksi', headerName: 'SELECTION STAGE', width: 300 },
    { field: 'grade', headerName: 'GRADE', width: 300 },
  ]

  return (
    <div>
      <h4 className="text-uppercase">
        <b>
          <center>
            <span className="text-center" style={{ fontFamily: 'Roboto' }}>
              LIST OF CANDIDATES
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
              DID NOT PASS
            </span>
          </center>
        </b>
      </h4>
      <CCardBody style={{ marginTop: '60px' }}>
        <DataGrid
          style={{ backgroundColor: 'white' }}
          rows={gagal ?? []}
          columns={data}
          pageSize={12}
          autoHeight
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </CCardBody>
    </div>
  )
}

export default NotPass
