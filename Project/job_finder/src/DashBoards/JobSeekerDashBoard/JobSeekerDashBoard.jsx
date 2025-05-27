import React, { useState } from 'react'
import FilterOptions from './FiltersOptions/FilterOptions'
import DisplayJobs from './DisplayJobs/DisplayJobs'
import "./job_seekerDashBoard.css"
const JobSeekerDashBoard = () => {
  const [selectJobRole,setSelectJobRole]=useState("")
  return (
    <div className='job_seekerDashBoard'>
        <div className='jobFilters'>
            <FilterOptions setSelectJobRole={setSelectJobRole}/>
        </div>
        <div className='displayJobs'>
            <DisplayJobs selectJobRole={selectJobRole}/>
        </div>
    </div>
  )
}

export default JobSeekerDashBoard