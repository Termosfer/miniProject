import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css'
const Modal = ({ user }) => {
  /* const [values, setValues] = useState({
    id: user.id,
    first_name: "",
    last_name: "",
  });
  

 

  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://reqres.in/api/users/${user.id}`
      );
      console.log(response.data.data.first_name, "adadad")
      setValues({
        ...values,
        first_name: response.data.data.first_name,
        last_name: response.data.data.last_name,
      });
    };
    getData();
  }, [user.id]);

  const submitHandler = async (e) => {
    e.preventDefault();
   const response =   axios.put(`https://reqres.in/api/users/${user.id}`, values);
   console.log(response)
   const modal = document.getElementById("exampleModal");
   const modalInstance = bootstrap.Modal.getInstance(modal);
   modalInstance.hide();
  }; */

  return (
    <div className="overlay">
<form action="" /* onSubmit={submitHandler} */ className="form">
  <span>X</span>
  <input type="text" /* value={values.first_name} onChange={(e)=>setValues({...values,first_name:e.target.value})} *//>
  <input type="text" /* value={values.last_name} onChange={(e)=>setValues({...values,last_name:e.target.value})} *//>
  
  <div className="buttondiv">
    <button type="submit" className="btn btn-success me-1">Update</button>
  <button type="submit" className="btn btn-primary ms-1">Cancel</button>  
    </div>
</form>
</div>






      /* <button
        type="submit"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@fat"
      >
        Update
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="submit"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={values.first_name}
                    onChange={(e) =>
                      setValues({ ...values, first_name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={values.last_name}
                    onChange={(e) =>
                      setValues({ ...values, last_name: e.target.value })
                    }
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
 */
  );
};

export default Modal;
