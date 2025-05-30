import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom'
import { db } from "../../../ConfigFirebase/config";
import { doc, getDoc } from "firebase/firestore";
const AppliedJobs = () => {
  const loggedinjobSeeker = JSON.parse(
    localStorage.getItem("loggedInJobSeeker")
  );

  const [loading, setLoading] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    let fetchApliedJobs = async () => {
      try {
        const docRef = doc(
          db,
          "job_seekers",
          loggedinjobSeeker.user.displayName
        );
        const mainDocRef = await getDoc(docRef);

        const jobSekkerDocData = mainDocRef.data();
        console.log(jobSekkerDocData, "jobSDocDATA");
        setAppliedJobs(jobSekkerDocData.appliedJobs);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApliedJobs();
  }, []);
  if (loading) {
    return <p>getting saved jobs..wait a moment</p>;
  }
  return (
    <div>
      <h1 style={{ fontSize: "5rem" }}>AppliedJobs</h1>
      {appliedJobs.map((appliedJob) => {
        return (
          <>
            <h2>{appliedJob.jobRole}</h2>
            <p>{appliedJob.company}</p>
          </>
        );
      })}
    </div>
  );
};

export default AppliedJobs;
