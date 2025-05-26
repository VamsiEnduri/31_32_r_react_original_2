import React, { useEffect, useState } from 'react'
import { doc ,getDoc, updateDoc} from 'firebase/firestore'
import { db } from '../../../ConfigFirebase/config'
const MyPostings = () => {
    const [jobs,setJobs]=useState([])
    const [loading,setLoading]=useState(true)
  const loggedinUser = JSON.parse(localStorage.getItem("loggedInRecruiter"));
const loggedInUserName=loggedinUser.user.displayName

  useEffect(()=>{

    const fetchingData=async()=>{
   const docRef= doc(db,"recruiters",loggedinUser.user.displayName)
   const getDocRef=await  getDoc(docRef)
console.log(getDocRef)

if(getDocRef.exists()){
    const data=getDocRef.data()
    console.log(data,"data ")
    setJobs(data.jobs || [])
    setLoading(false)
}
    }
    fetchingData()
 

         
  },[])
  if(loading){
    return <p>loading ......</p>
  }

  const handleDeleteJob=async (choosedJobIndex)=>{
                      let jobsAfterDeleteFilteartion=jobs.filter((job,index)=>index !== choosedJobIndex)
                      console.log(jobsAfterDeleteFilteartion)

                    const docRef=  doc(db,"recruiters",loggedInUserName)
                    await updateDoc(docRef,{
                      jobs:jobsAfterDeleteFilteartion
                    })
                      alert("job dleted successfully!!!")
                    setJobs(jobsAfterDeleteFilteartion)
  }


  return (
    <div style={{display:'flex',justifyContent:"space-around",gap:"20px"}}>
        {jobs.length > 0 ? <>
        {jobs.map((job,jobIndex)=>{
            return (
                <div style={{border:"1px solid black",padding:"10px",marginBottom:"10px"}}>
                <h1>{job.jobRole}</h1>
                <p>{job.company}</p>
                <div style={{display:'flex',gap:"20px"}}>
                  <span style={{border:"1px solid black",padding:5,borderRadius:"3px"}}>edit</span>
                  <span onClick={()=>handleDeleteJob(jobIndex)} style={{border:"1px solid black",padding:5,borderRadius:"3px"}}>Dlete</span>
                </div>
                </div>
            )
        })}
        </>:"no jobs posted yet"}
    </div>
  )
}

export default MyPostings