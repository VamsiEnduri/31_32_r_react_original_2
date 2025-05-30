import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import FilterOptions from "./FiltersOptions/FilterOptions";
import DisplayJobs from "./DisplayJobs/DisplayJobs";
import "./job_seekerDashBoard.css";
import SavedJobs from "./SavedJobs/SavedJobs";
import AppliedJobs from "./AppliedJobs/AppliedJobs";
const JobSeekerDashBoard = () => {
  // e.preventDefault()
  const params = useParams();
  console.log(params, "params");

  function renderComp(){
    // e.preventDefault
    // let CompName;
  if (params.savedJobs === "savedJobs") {
    return <SavedJobs />;
  } else if (params.savedJobs === "appliedJobs") {
    return <AppliedJobs />;
  } else {
    return  <DisplayJobs selectJobRole={selectJobRole} />;
  }
  // return CompName;
  }

  const [selectJobRole, setSelectJobRole] = useState("");
  return (
    <div className="job_seekerDashBoard">
      <div className="jobFilters">
        <FilterOptions setSelectJobRole={setSelectJobRole} />
      </div>
      <div className="displayJobs">
        {renderComp()}

        {/* <Outlet selectJobRole={selectJobRole}/> */}
      </div>
    </div>
  );
};

export default JobSeekerDashBoard;
