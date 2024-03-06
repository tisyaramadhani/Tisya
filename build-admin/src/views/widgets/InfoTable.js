import React from 'react'
import { CSpinner } from '@coreui/react'

export function TableInfo(props) {
  /* eslint-disable react/prop-types */
  return (
    <>
      {props.stsload || props.stserror ? (
        <tr>
          <td colSpan={props.col}>
            {props.stsload ? (
              <div className="d-flex justify-content-center">
                <CSpinner color="primary" />
              </div>
            ) : (
              ''
            )}

            {props.stserror ? (
              <div className="d-flex justify-content-center">
                <p className="text-danger">{props.msg}, please try again!</p>
              </div>
            ) : (
              ''
            )}
          </td>
        </tr>
      ) : props.count === 0 ? (
        <tr>
          <td colSpan={props.col}>
            <div className="d-flex justify-content-center">
              <p className="text-danger">No Data Record Found!</p>
            </div>
          </td>
        </tr>
      ) : (
        ''
      )}
    </>
  )
}
