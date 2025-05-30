import React, { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  updateDoc,
  arrayUnion,
  doc,
  getDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../../ConfigFirebase/config";
const DisplayJobs = ({ selectJobRole }) => {
  const navigate = useNavigate();

  const loggedinjobSeeker = JSON.parse(
    localStorage.getItem("loggedInJobSeeker")
  );

  console.log(selectJobRole);
  const [allJobs, setAllJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [filDataOnJobRole, setFilDataOnJobRole] = useState([]);
  console.log("alljobs", allJobs);
  useEffect(() => {
    const fetchingJobs = async () => {
      try {
        const recCollectionRef = collection(db, "recruiters");
        const allDocs = await getDocs(recCollectionRef);

        // const allDocs = await getDocs(collection(db, "recruiters"));
        let jobsFromDocs = [];
        // console.log(allDocs.docs, "allDocs");
        allDocs.docs.map((doc) => {
          let individualDocJobs = doc.data().jobs;
          console.log(individualDocJobs, "individual jobs");
          individualDocJobs.map((singleJob) => {
            jobsFromDocs.push(singleJob);
          });
          console.log(jobsFromDocs, "jobsFromDocs");
          // jobsFromDocs.push(doc.data().jobs)
          // console.log(doc.data().jobs,"doc")
          setAllJobs(jobsFromDocs);
          setFilDataOnJobRole(jobsFromDocs);
          setLoadingJobs(false);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchingJobs();
  }, []);
  useEffect(() => {
    //  alert("role")
    let roleBasedFilDta = allJobs.filter(
      (job) => job.jobRole === selectJobRole
    );
    setFilDataOnJobRole(roleBasedFilDta);
    //  console.log(filDataOnJobRole)
    console.log(roleBasedFilDta);
  }, [selectJobRole]);
  if (loadingJobs) {
    return <p>loading jobs...wait a moment</p>;
  }

  const handleSavedJob = async (savedJob) => {
    console.log(savedJob, "saved jobs");
    try {
      let job_seeker_ref_doc = doc(
        db,
        "job_seekers",
        loggedinjobSeeker.user.displayName
      );
      // console.log(job_seeker_ref_doc,"job seeker ref doc")

      let job_seekerDataDoc = await getDoc(job_seeker_ref_doc);
      console.log(job_seekerDataDoc);

      await updateDoc(job_seeker_ref_doc, {
        savedJobs: arrayUnion(savedJob),
      });
      alert("successfuly job saved");
    } catch (err) {
      console.log(err);
    }
  };

  const handleApplyJob = async (appliedJob) => {
    console.log(appliedJob, "aplied jobs");
    try {
      let job_seeker_ref_doc = doc(
        db,
        "job_seekers",
        loggedinjobSeeker.user.displayName
      );
      // console.log(job_seeker_ref_doc,"job seeker ref doc")

      let job_seekerDataDoc = await getDoc(job_seeker_ref_doc);
      console.log(job_seekerDataDoc);

      await updateDoc(job_seeker_ref_doc, {
        appliedJobs: arrayUnion(appliedJob),
      });
      alert("successfuly job applied");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {/* <button onClick={()=>navigate("savedJobs")}>SavedJobs</button> */}
      {filDataOnJobRole.length > 0 ? (
        <>
          {filDataOnJobRole.map((job) => {
            return (
              <div style={{ border: "1px solid black", marginBottom: "10px" }}>
                <p>{job.jobRole}</p>
                <span>{job.company}</span>
                <div>
                  <button onClick={() => handleSavedJob(job)}>save</button>
                  <button onClick={() => handleApplyJob(job)}>apply</button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        "no jobs found"
      )}
    </div>
  );
};

export default DisplayJobs;
