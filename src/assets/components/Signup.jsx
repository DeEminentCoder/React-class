import React, { useState } from "react";

const Signup = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  return (
    <>
      <div className="container-fluid mx-auto col-8 mt-lg-5 mt-md-3 mt-1 shadow-sm py-3">

        <h2 className="text-center text-decoration-underline text-primary">
          Sign up Page
        </h2>

        <div className="form-floating my-3">
          <input
            type="text"
            placeholder="FirstName"
            className="form-control"
            onChange={(e) => setfirstname(e.target.value)}
            value={firstname}
          />
          <label htmlFor="Firstname">Firstname</label>
        </div>

        <div className="form-floating my-3">
          <input
            type="text"
            placeholder="LastName"
            className="form-control"
            onChange={(e) => setlastname(e.target.value)}
            value={lastname}
          />
          <label htmlFor="LasttName">LasttName</label>
        </div>

        <div className="form-floating my-3">
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="Email">Email</label>
        </div>

        <div className="form-floating my-3">
          <input
            type="text"
            placeholder="Password"
            className="form-control"
            onChange={(e) => setpassword(e.target.value)}
          />
          <label htmlFor="Password">Password</label>
        </div>

      </div>
    </>
  );
};

export default Signup;
