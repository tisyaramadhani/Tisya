import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="justify-content-center">
      <div>
        <span className="ms-1">&copy; PT Sumitomo Wiring System Batam Indonesia</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
