import React from 'react'
import FindJobs from './FindJobs'
import FindTalentPage from './FindTalentPage'
import PostJobPage from './PostJobPage'
import JobDescPage from './JobDescPage'
import CompanyPage from './CompanyPage'
import PostedJobPage from './PostedJobPage'
import JobHistoryPage from './JobHistoryPage'
import ApplyJobPage from './ApplyJobPage'
import TalentProfilePage from './TalentProfilePage'
import SignUpPage from './SignUpPage'
import ProfilePage from './ProfilePage'
import HomePage from './HomePage'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import { Divider } from '@mantine/core'
import Footer from '../Footer/Footer'
import ProtectedRoute from '../Services/ProtectedRoute'
import PublicRoute from '../Services/PublicRoute'
import Company from '../CompanyProfile/Company'
import Unauthorized from './Unauthorized'


const AppRoutes = () => {
    const user= useSelector((state) => state.user);
    // const navigate = useNavigate();
   
  return (
    <div>
        <BrowserRouter>
      <div className='relative'>
      <Header  />
      <Divider color='mineShaft.5' size="sm"  />
      <Routes>
      {/* <Route path="/company/:companyName" element={<Company />} /> */}
      <Route path='/find-jobs' element= { <FindJobs />}  />
      <Route path='/find-talent' element={<FindTalentPage />}  />
      <Route path='/post-job/:id' element={<ProtectedRoute allowRoles={["EMPLOYER"]} > <PostJobPage /></ProtectedRoute>}  />
      <Route path='/jobs/:id' element={<JobDescPage/>}  />
      <Route path='/unauthorized' element={<Unauthorized />}  />
    

      <Route path="/company" element={<CompanyPage />} />
      <Route path="/company/:name" element={<CompanyPage />} />


      <Route path='/posted-jobs' element={<PostedJobPage/>}  />
      <Route path='/posted-jobs/:id' element={<ProtectedRoute allowRoles={["EMPLOYER"]} > <PostedJobPage/></ProtectedRoute>}  />
      <Route path='/job-history' element= {<ProtectedRoute allowRoles={["APPLICANT"]} > <JobHistoryPage/></ProtectedRoute>}  />
      <Route path='/apply-job/:id' element={ <ProtectedRoute allowRoles={["APPLICANT"]} > <ApplyJobPage/> </ProtectedRoute>}  />
      <Route path='/talent-profile/:id' element={<TalentProfilePage/>}  />
      <Route path='/signUp' element={ <PublicRoute> <SignUpPage/> </PublicRoute> }  />
      {/* <Route path='/signUp' element={ <SignUpPage/>}  /> */}
      <Route path='/login' element={<SignUpPage/>}  />
      <Route path='/profile' element={<ProfilePage/>}  />
      <Route path='*' element={<HomePage/>}  />
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
