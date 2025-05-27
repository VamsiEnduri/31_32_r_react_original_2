import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../ConfigFirebase/config";
const DisplayJobs = ({selectJobRole}) => {
  console.log(selectJobRole)
  const [allJobs, setAllJobs] = useState([]);
  const [loadingJobs,setLoadingJobs]=useState(true)
  const [filDataOnJobRole,setFilDataOnJobRole]=useState([])
  console.log("alljobs",allJobs)
  useEffect(() => {
    const fetchingJobs = async () => {
      try {
        // const recCollectionRef = collection(db, "recruiters");
        // const allDocs=await getDocs(recCollectionRef)

        const allDocs = await getDocs(collection(db, "recruiters"));
        let jobsFromDocs=[]
        // console.log(allDocs.docs, "allDocs");
        allDocs.docs.map((doc)=>{
          let individualDocJobs=doc.data().jobs
          console.log(individualDocJobs)
          individualDocJobs.map((singleJob)=>{
            jobsFromDocs.push(singleJob)
          })
          console.log(jobsFromDocs,"jobsFromDocs")
          // jobsFromDocs.push(doc.data().jobs)
          // console.log(doc.data().jobs,"doc")
          setAllJobs(jobsFromDocs)
          setFilDataOnJobRole(jobsFromDocs)
          setLoadingJobs(false)
        })
      } catch (err) {
        console.log(err);
      }
    };
    fetchingJobs();
  }, []);
  useEffect(()=>{
    //  alert("role")    
     let roleBasedFilDta=allJobs.filter((job)=>job.jobRole === selectJobRole) 
     setFilDataOnJobRole(roleBasedFilDta)
    //  console.log(filDataOnJobRole)
     console.log(roleBasedFilDta)
  },[selectJobRole])
  if(loadingJobs){
    return <p>loading jobs...wait a moment</p>
  }
  return <div>
    {filDataOnJobRole.length>0 ?  <>
    
   {filDataOnJobRole.map((job)=>{
    return (
      <div style={{border:"1px solid black",marginBottom:"10px"}}>
      <p>{job.jobRole}</p>
      <span>{job.company}</span>
      </div>
    )
   })}
    </>:"no jobs found"}
  </div>;
};

export default DisplayJobs;
