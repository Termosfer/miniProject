import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    first_name: "",
    last_name: "",
  });
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setValues({
          ...values,
          first_name: res.data.data.first_name,
          last_name: res.data.data.last_name,
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
     axios
      .patch(`https://reqres.in/api/users/${id}`, values)
      .then((res) => {
        setValues({
          ...values,
          first_name: res.data.data.first_name,
          last_name: res.data.data.last_name,
        });
        navigate("/admin/adminusers");
      })
      .catch((err) => console.log(err));
      navigate("/admin/adminusers");
  };
  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={values.first_name}
              onChange={(e) =>
                setValues({ ...values, first_name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              value={values.last_name}
              onChange={(e) =>
                setValues({ ...values, last_name: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
