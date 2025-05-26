import React, { useState } from 'react'
import {useNavigate,Link} from "react-router-dom"
import {signInWithEmailAndPassword} from "firebase/auth"
import { authentication } from '../../ConfigFirebase/config'
import {Form} from "react-bootstrap"
const Login = () => {
  const navigate=useNavigate()

  const [loginDetails,setLoginDetails]=useState({email:"",password:"",role:""})
  const handleLoginSubmit=async(e)=>{
    e.preventDefault()
    const {email,password,role}=loginDetails;
try{
             const loggedinUser=  await signInWithEmailAndPassword(authentication,email,password)
               alert("loggin succesffull")
              
              if(role === "recruiter"){
                 localStorage.setItem("loggedInRecruiter",JSON.stringify(loggedinUser))
              }else{
                 localStorage.setItem("loggedInJobSeeker",JSON.stringify(loggedinUser))
              }

               navigate(`/${role}DashBoard`)
}
catch(err){
  console.log(err)
}
  }
  return (
    <div>
        <Form
        style={{ maxWidth: 500, margin: "auto" }}
        id="form"
        onSubmit={handleLoginSubmit}
      >
        
        <Form.Group className="mb-3">
          <Form.Label>Email :--</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email here"
            onChange={(e) => setLoginDetails({...loginDetails, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password :--</Form.Label>
          <Form.Control
            type="password"
            placeholder="password here"
            onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value })}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="mb-3"
          onChange={(e) => setLoginDetails({ ...loginDetails,role: e.target.value })}
        >
          <option>choose yr role :--</option>
          <option value="recruiter">Recruiter</option>
          <option value="job_seeker">JobSeeker</option>
        </Form.Select>
        <button type="submit">Login</button>
        <Link to="/signup">go to SignUpForm</Link>
      </Form>
    </div>
  )
}

export default Login