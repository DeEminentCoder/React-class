import React, { useState } from "react";

const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [studentArr, setstudentArray] = useState([]);

  const submitDetails = () => {
    let stdDetails = { firstname, lastname, email, password };
    console.log(stdDetails);
    setstudentArray([...studentArr, stdDetails]);
    console.log(studentArr);
    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };
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
            type="email"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="Email">Emal</label>
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

        <div className="my-3">
          <button className="btn btn-primary w-100" onClick={submitDetails}>
            Submit
          </button>
        </div>
      </div>

      <table className="table">
        <tr>
          <th>S/N</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>

        {studentArr.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
            <td>
              <button className="btn btn-danger btn-sm">Delete</button>
              <button className="btn btn-warning btn-sm">Edit</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Signup;
