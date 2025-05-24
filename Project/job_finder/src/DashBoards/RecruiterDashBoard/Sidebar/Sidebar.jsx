import React from 'react'
import {Link} from "react-router-dom"
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar_links'>
<Link to="post_job">PostJob</Link>
<Link to="my_postings">MyPostings</Link>
    </div>
  )
}

export default Sidebar