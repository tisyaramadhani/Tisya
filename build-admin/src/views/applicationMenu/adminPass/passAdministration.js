import React from 'react'
import { CCardBody } from '@coreui/react'
import { useQuery } from 'react-query'
import { getApplicationByStatusLulus } from 'src/api/ApplicationApi'
import { useLocation } from 'react-router-dom'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

const PassAdministration = () => {
  const { state } = useLocation()
  const { data: lulus } = useQuery('application-status-lulus', async () => {
    return await getApplicationByStatusLulus(state)
  })

  const data = [
    { field: 'no_test', headerName: 'NO TEST', width: 200 },
    { field: 'name', headerName: 'NAME', width: 350 },
    { field: 'position', headerName: 'POSITION', width: 300 },
    { field: 'section', headerName: 'SECTION', width: 300 },
    { field: 'next_selection', headerName: 'SELECTION STAGE', width: 300 },
    { field: 'grade', headerName: 'GRADE', width: 300 },
  ]

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
      </GridToolbarContainer>
    )
  }

  return (
    <div>
      <h4 className="text-uppercase">
        <b>
          <center>
            <span className="text-center" style={{ fontFamily: 'Roboto' }}>
              LIST OF{' '}
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
              QUALIFIED CANDIDATES
            </span>
          </center>
        </b>
      </h4>
      <CCardBody style={{ marginTop: '60px' }}></CCardBody>
      <DataGrid
        style={{ backgroundColor: 'white' }}
        rows={lulus ?? []}
        columns={data}
        pageSize={12}
        autoHeight
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  )
}

export default PassAdministration
