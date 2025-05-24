import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
const Login = () => {
    const abc=useNavigate()
    const [loginDetails,setloginDetails]=useState({email:"",password:''})
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(loginDetails)
        const accounts=JSON.parse(localStorage.getItem("signUpAccounts"))

        const matchedLoggedinSeller=accounts.find(seller=>seller.email === loginDetails.email && seller.password === loginDetails.password)

        console.log(matchedLoggedinSeller)

        if(matchedLoggedinSeller){
            localStorage.setItem("loggedinSeller",JSON.stringify(matchedLoggedinSeller))
                    abc(`/${matchedLoggedinSeller.role}DashBoard`) // sellerDashBoard
                    alert(`sucessf ully loggedin and re-directing to ${matchedLoggedinSeller.role} dashbaord`)
        }
    }
  return (
    <div>
       <form action="" onSubmit={handleLogin}>
         <input
        type="email"
        name=""
        id="email"
        placeholder="email here"
        required
      onChange={(e)=>setloginDetails({...loginDetails,email:e.target.value})}

      />
      <input
        type="password"
        name=""
        id="password"
        placeholder="password here"
        required
      onChange={(e)=>setloginDetails({...loginDetails,password:e.target.value})}

      />
      <button type='submit'>login</button>
       </form>
    </div>
  )
}

export default Login