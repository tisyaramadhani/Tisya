import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilUserPlus,
  cilUser,
  cilHome,
  cilNewspaper,
  cilClipboard,
  cilLibraryAdd,
  cilLockLocked,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'
import jwtDecode from 'jwt-decode'

const { roles_id } = jwtDecode(localStorage.getItem('accessToken'))

const _nav =
  roles_id === 2
    ? [
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashInterviewer',
          icon: <CIcon icon={cilHome} className="nav-icon" color="#FFFFFF" />,
        },
        {
          component: CNavItem,
          name: 'Candidate Data',
          to: '/interviewerAccess',
          icon: <CIcon icon={cilLockLocked} className="nav-icon" color="#FFFFFF" />,
        },
      ]
    : [
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/admin',
          icon: <CIcon icon={cilHome} className="nav-icon" color="#FFFFFF" />,
        },
        {
          component: CNavGroup,
          name: 'Application',
          to: '/applicationMenu',
          icon: <CIcon icon={cilDescription} className="nav-icon" />,
          className: 'custom-text',
          items: [
            {
              component: CNavItem,
              name: 'Vacancies',
              to: '/applicationMenu/Vacancy',
            },
            {
              component: CNavItem,
              name: 'Attendance',
              to: '/candidateAtten',
            },
            {
              component: CNavItem,
              name: 'Candidate Pass',
              to: '/applicationMenu/adminPass',
            },
            {
              component: CNavItem,
              name: 'Candidate Fail',
              to: '/applicationMenu/adminNotPass',
            },
          ],
        },
        {
          component: CNavItem,
          name: 'Interviewer',
          to: '/interviewer',
          icon: <CIcon icon={cilUserPlus} className="nav-icon" />,
        },
        {
          component: CNavItem,
          name: 'User',
          to: '/user',
          icon: <CIcon icon={cilUser} className="nav-icon" />,
        },
        {
          component: CNavGroup,
          name: 'View',
          to: '/appearsMenu',
          icon: <CIcon icon={cilNewspaper} className="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Home',
              to: '/appearsMenu/appearsHome',
            },
            {
              component: CNavGroup,
              name: 'About',
              to: '/appearsMenu/appearsAbout',
              items: [
                {
                  component: CNavItem,
                  name: 'Company Profile',
                  to: '/appearsMenu/appearsAbout/appearsProfile',
                },
                {
                  component: CNavItem,
                  name: 'President Director',
                  to: '/appearsMenu/appearsAbout/appearsPresident',
                },
              ],
            },
            {
              component: CNavItem,
              name: 'Education',
              to: '/appearsMenu/educationMaster',
            },
            {
              component: CNavItem,
              name: 'Major',
              to: '/appearsMenu/majorMaster',
            },
            {
              component: CNavItem,
              name: 'Skill',
              to: '/appearsMenu/expertiseMaster',
            },
            {
              component: CNavItem,
              name: 'Certification',
              to: '/appearsMenu/certificationMaster',
            },
          ],
        },
        {
          component: CNavItem,
          name: 'Selection',
          to: '/selectionMaster',
          icon: <CIcon icon={cilClipboard} className="nav-icon" />,
        },
        {
          component: CNavItem,
          name: 'Section',
          to: '/sectionMaster',
          icon: <CIcon icon={cilLibraryAdd} className="nav-icon" />,
        },
      ]

export default _nav
