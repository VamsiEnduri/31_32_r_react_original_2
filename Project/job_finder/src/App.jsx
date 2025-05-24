import React from 'react'
import NavbarComp from './Comps/Navbar/Navbar'
import {Route,Routes} from "react-router-dom"
import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/Signup'
import RecruiterDashBoard from './DashBoards/RecruiterDashBoard/RecruiterDashBoard'
import PostJob from './DashBoards/RecruiterDashBoard/PostJob/PostJob'
import MyPostings from './DashBoards/RecruiterDashBoard/MyPostings/MyPostings'
const App = () => {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/recruiterDashBoard" element={<RecruiterDashBoard />}>
                <Route path="post_job" element={<PostJob />}/>
                <Route path="my_postings" element={<MyPostings />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App