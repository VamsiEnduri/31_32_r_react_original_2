import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import { authentication,db } from "../../ConfigFirebase/config";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {setDoc,doc,} from "firebase/firestore"
// doc :-- to make a doc
// setDoc :-- to create a room for that doc in database
import "./SignUp.css";
const Signup = () => {
  const navigate=useNavigate()
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const handleSignUpSubmit = async (e) => {
    e.preventDefault()
    try {
      const accountCreated=await createUserWithEmailAndPassword(authentication,signUpDetails.email,signUpDetails.password);
      console.log(accountCreated,"account created obj")

      await updateProfile(accountCreated.user,{
        displayName:signUpDetails.name
      })      

      // await doc(db,`${signUpDetails.role}s`,signUpDetails.name)

        await setDoc(doc(db,`${signUpDetails.role}s`,signUpDetails.name),{
          name:signUpDetails.name,
          email:signUpDetails.email,
          role:signUpDetails.role,
          id:Date.now()
        })
        alert("account created successfully and redirecting to login")
        navigate("/login")

        //setDoc :-- it will create doc in the database :-- it takes 2 values r 2 args
        // 1 arg is all about reference of the doc, we can use doc () as first vlue
        // 2.value :-- fileds to be git in that doc (1st arg)

        //doc :-- it is used to create a ref of the doc means in which db , which collection nd which doc shoul be given 
        // we can pass3 values
        //1. value :-- db
        //2. value :-- collection (recruiters)
        //3. value :-- docname(rakesh)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ marginTop: "3rem" }} className="signUpForm">
      <Form
        style={{ maxWidth: 500, margin: "auto" }}
        id="form"
        onSubmit={handleSignUpSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Name :--</Form.Label>
          <Form.Control
            type="text"
            placeholder="name here"
            onChange={(e) => setSignUpDetails({ ...signUpDetails,name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email :--</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email here"
            onChange={(e) => setSignUpDetails({...signUpDetails, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password :--</Form.Label>
          <Form.Control
            type="password"
            placeholder="password here"
            onChange={(e) => setSignUpDetails({...signUpDetails, password: e.target.value })}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="mb-3"
          onChange={(e) => setSignUpDetails({ ...signUpDetails,role: e.target.value })}
        >
          <option>choose yr role :--</option>
          <option value="recruiter">Recruiter</option>
          <option value="job_seeker">JobSeeker</option>
        </Form.Select>
        <button type="submit">signup</button>
      </Form>
    </div>
  );
};

export default Signup;
