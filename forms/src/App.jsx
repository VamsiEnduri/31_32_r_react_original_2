// import React, { useState } from "react";

// const App = () => {
//   console.log("hello")
//   const a=20
//   const [name, setName] = useState("");
//   const [email,setEmail]=useState("")
//   console.log("nameStrGivenBYme",name)
//   const handleChange = (abc) => {
//     console.log(abc.target.value, "input value");
//     setName(abc.target.value)
//   };
//   const handleChnageEmail=(xyz)=>{
//           console.log(xyz.target.value,"email")
//           setEmail(xyz.target.value)
//   }
//   return (
//     <div>
//       {/* <input type="text" placeholder="name here" id="name"  onChange={(e)=>console.log(e.target.value)}/> */}


//       <input
//         type="text"
//         placeholder="name here"
//         id="name"
//         onChange={(e) => handleChange(e)}
//       />

//       {a}
//       <input type="email" placeholder="email here" id="email" onChange={(e)=>handleChnageEmail(e)}/>

//       <div style={{marginTop:"4rem", backgroundColor:"lightcoral",padding:"4rem"}}>
//         <span>name:- {name}</span><br />
//         <span>email :-- {email}</span>
//       </div>
//       {/* <input type="password" placeholder="pasword here" id="password" />
//       <select name="" id="role">
//         <option value="">choose yr role:--</option>
//         <option value="recruiter">recruiter</option>
//         <option value="jobseeker">JobSeeker</option>
//       </select> */}
//       <button>signup</button>
//     </div>
//   );
// };

// export default App;




// signup form example :--


import React, { useState } from "react";

const App = () => {
 const [signupDetails,setSignUpDetails]=useState({
  name:"",email:"",password:"",role:""
 })

 console.log(signupDetails)

  return (
    <div>
   
      <input
        type="text"
        placeholder="name here"
        id="name"
        name="name"
        onChange={(e)=>setSignUpDetails({...signupDetails,name:e.target.value})}
        // onChange={(e)=>setSignUpDetails({e})}
        // onChange={(e)=>console.log(e.target.name,e.target.value)}
      />

     
      <input type="email" placeholder="email here" id="email"  name="email"
        // onChange={(e)=>console.log(e.target.name,e.target.value)}
      // onChange={(e)=>setSignUpDetails({[e.target.name]:e.target.value})} --> e:vamsi@gmail.com  
      onChange={(e)=>setSignUpDetails({...signupDetails,email:e.target.value})} 
      //updater function state {key:value} {name:""}
      />
     
      <input type="password" placeholder="pasword here" id="password" 
        onChange={(e)=>setSignUpDetails({...signupDetails,password:e.target.value})}
      
      />
      <select name="" id="role" onChange={(e)=>setSignUpDetails({...signupDetails,role:e.target.value})}>
        <option value="">choose yr role:--</option>
        <option value="recruiter">recruiter</option>
        <option value="jobseeker">JobSeeker</option>
      </select>
      <button>signup</button>
    </div>
  );
};

export default App;

