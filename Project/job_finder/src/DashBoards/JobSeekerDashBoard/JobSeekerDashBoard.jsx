import React from 'react'
import FilterOptions from './FiltersOptions/FilterOptions'

const JobSeekerDashBoard = () => {
  return (
    <div>
        <div className='jobFilters'>
            <FilterOptions />
        </div>
        <div className='displayJobs'>
            
        </div>
    </div>
  )
}

export default JobSeekerDashBoard