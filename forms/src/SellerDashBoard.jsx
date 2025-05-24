import React from 'react'
import {useNavigate} from "react-router-dom"

const SellerDashBoard = () => {
    const loogeinSeller=JSON.parse(localStorage.getItem("loggedinSeller"))
    let navigate=useNavigate()
    const handleLogout=()=>{

const confirmation=confirm("are you sure to logout");

if(confirmation){
   localStorage.removeItem("loggedinSeller")
 

  if(localStorage.getItem("loggedinSeller")){
    
     navigate(`/${loogeinSeller.role}DashBoard`)
    }else{
        alert("loggedout scuuessfully!!!")
         navigate("/login")
    }
}else{
    alert("you choosed to stay in dashboard")
}

     
}
  return (
    <div>SellerDashBoard 

        <div>
            <h1>{loogeinSeller.name}</h1>
            <p>{loogeinSeller.email}</p>
            <span>{loogeinSeller.role}</span>
        </div>

        <h1 onClick={handleLogout}><button>logout</button></h1>
    </div>
  )
}

export default SellerDashBoard;



// dvlpr__avvu :-- pic