// // import React, { useState } from "react";

// // const App = () => {
// //   console.log("hello")
// //   const a=20
// //   const [name, setName] = useState("");
// //   const [email,setEmail]=useState("")
// //   console.log("nameStrGivenBYme",name)
// //   const handleChange = (abc) => {
// //     console.log(abc.target.value, "input value");
// //     setName(abc.target.value)
// //   };
// //   const handleChnageEmail=(xyz)=>{
// //           console.log(xyz.target.value,"email")
// //           setEmail(xyz.target.value)
// //   }
// //   return (
// //     <div>
// //       {/* <input type="text" placeholder="name here" id="name"  onChange={(e)=>console.log(e.target.value)}/> */}

// //       <input
// //         type="text"
// //         placeholder="name here"
// //         id="name"
// //         onChange={(e) => handleChange(e)}
// //       />

// //       {a}
// //       <input type="email" placeholder="email here" id="email" onChange={(e)=>handleChnageEmail(e)}/>

// //       <div style={{marginTop:"4rem", backgroundColor:"lightcoral",padding:"4rem"}}>
// //         <span>name:- {name}</span><br />
// //         <span>email :-- {email}</span>
// //       </div>
// //       {/* <input type="password" placeholder="pasword here" id="password" />
// //       <select name="" id="role">
// //         <option value="">choose yr role:--</option>
// //         <option value="recruiter">recruiter</option>
// //         <option value="jobseeker">JobSeeker</option>
// //       </select> */}
// //       <button>signup</button>
// //     </div>
// //   );
// // };

// // export default App;

// // signup form example :--

// import React, { useState } from "react";

// const App = () => {
//  const [signupDetails,setSignUpDetails]=useState({
//   name:"",email:"",password:"",role:""
//  })

//  console.log(signupDetails)

//   return (
//     <div>

//       <input
//         type="text"
//         placeholder="name here"
//         id="name"
//         name="name"
//         onChange={(e)=>setSignUpDetails({...signupDetails,name:e.target.value})}
//         // onChange={(e)=>setSignUpDetails({e})}
//         // onChange={(e)=>console.log(e.target.name,e.target.value)}
//       />

//       <input type="email" placeholder="email here" id="email"  name="email"
//         // onChange={(e)=>console.log(e.target.name,e.target.value)}
//       // onChange={(e)=>setSignUpDetails({[e.target.name]:e.target.value})} --> e:vamsi@gmail.com
//       onChange={(e)=>setSignUpDetails({...signupDetails,email:e.target.value})}
//       //updater function state {key:value} {name:""}
//       />

//       <input type="password" placeholder="pasword here" id="password"
//         onChange={(e)=>setSignUpDetails({...signupDetails,password:e.target.value})}

//       />
//       <select name="" id="role" onChange={(e)=>setSignUpDetails({...signupDetails,role:e.target.value})}>
//         <option value="">choose yr role:--</option>
//         <option value="recruiter">recruiter</option>
//         <option value="jobseeker">JobSeeker</option>
//       </select>
//       <button>signup</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import {useNavigate} from "react-router-dom"
// const App = () => {
//   const navigate=useNavigate()
//   const [signupDetails,setSignUpDetails]=useState({name:"",email:"",password:"",role:""})

//   const SubmitHandler=(e)=>{
//     e.preventDefault();
//     console.log(signupDetails,"signup details")

//     const allAccounts=JSON.parse(localStorage.getItem("signUpAccounts")) || [] //3

//     allAccounts.push(signupDetails) // 3+1 // 4
//     localStorage.setItem("signUpAccounts",JSON.stringify(allAccounts))
//     navigate("/login")
//     alert("successfuly signup!!!")
//   }
//   return (
//     <div>
//       <form action="" onSubmit={SubmitHandler}>
//         <input type="text"  name="" id="name" placeholder="name here" required 
//       onChange={(e)=>setSignUpDetails({...signupDetails,name:e.target.value})}
//       />
//       <input
//         type="email"
//         name=""
//         id="email"
//         placeholder="email here"
//         required
//       onChange={(e)=>setSignUpDetails({...signupDetails,email:e.target.value})}

//       />
//       <input
//         type="password"
//         name=""
//         id="password"
//         placeholder="password here"
//         required
//       onChange={(e)=>setSignUpDetails({...signupDetails,password:e.target.value})}

//       />
//       <select name="" id="role" required 
//       onChange={(e)=>setSignUpDetails({...signupDetails,role:e.target.value})}
      
//       >
//         <option value="">choose yr role :-- </option>
//         <option value="seller">seller</option>
//         <option value="buyer">buyer</option>
//       </select>

//       <button type="submit">SignUp</button>
//       </form>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './Login'
import SignUp from './SignUp'
import SellerDashBoard from './SellerDashBoard'
const App = () => {
  return (
    <div>
<Routes >
  <Route path="/sellerDashBoard" element={<SellerDashBoard />} />
  <Route path="/signup" element={<SignUp />}/>
  <Route path="/login" element={<Login />}/>
</Routes>
    </div>
  )
}

export default App
