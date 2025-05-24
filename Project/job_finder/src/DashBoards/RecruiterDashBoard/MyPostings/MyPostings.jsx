import React, { useEffect, useState } from 'react'
import { doc ,getDoc} from 'firebase/firestore'
import { db } from '../../../ConfigFirebase/config'
const MyPostings = () => {
    const [jobs,setJobs]=useState([])
    const [loading,setLoading]=useState(true)
  const loggedinUser = JSON.parse(localStorage.getItem("loggedInRecruiter"));

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

  return (
    <div>
        {jobs.length > 0 ? <>
        {jobs.map((job)=>{
            return (
                <>
                <h1>{job.jobRole}</h1>
                <p>{job.company}</p>
                </>
            )
        })}
        </>:"no jobs posted yet"}
    </div>
  )
}

export default MyPostings