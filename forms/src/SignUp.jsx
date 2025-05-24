import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [signupDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(signupDetails, "signup details");

    const allAccounts =
      JSON.parse(localStorage.getItem("signUpAccounts")) || []; //3

    let existingUser = allAccounts.find(
      (seller) => seller.email === signupDetails.email
    );
    if (existingUser) {
      alert("already email is in use");
    } else {
      allAccounts.push(signupDetails); // 3+1 // 4
      localStorage.setItem("signUpAccounts", JSON.stringify(allAccounts));
      navigate("/login");
      alert("successfuly signup!!!");
    }
  };
  return (
    <div>
      <form action="" onSubmit={SubmitHandler}>
        <input
          type="text"
          name=""
          id="name"
          placeholder="name here"
          required
          onChange={(e) =>
            setSignUpDetails({ ...signupDetails, name: e.target.value })
          }
        />
        <input
          type="email"
          name=""
          id="email"
          placeholder="email here"
          required
          onChange={(e) =>
            setSignUpDetails({ ...signupDetails, email: e.target.value })
          }
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="password here"
          required
          onChange={(e) =>
            setSignUpDetails({ ...signupDetails, password: e.target.value })
          }
        />
        <select
          name=""
          id="role"
          required
          onChange={(e) =>
            setSignUpDetails({ ...signupDetails, role: e.target.value })
          }
        >
          <option value="">choose yr role :-- </option>
          <option value="seller">seller</option>
          <option value="buyer">buyer</option>
        </select>

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
