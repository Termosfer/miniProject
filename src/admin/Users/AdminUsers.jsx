import React, { useContext, useState } from "react";
import { UserContex } from "../../context/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminUsers = () => {
  const {
    users,
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    deleteHandler,
  } = useContext(UserContex);

  const handlerDelete = (id) => {
    deleteHandler(id);
  };

  return (
    <div className="container mt-5 ">
      <h1>Total Users({users ? users.length : null})</h1>
      <table className="table table-striped table-hover mt-5 mx-auto w-75">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr className="text-center align-middle" key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <img src={user.avatar} alt={user.first_name} />
                  </td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                   <Link to={`/update/${user.id}`}><button className="btn btn-success me-1">Edit</button></Link> 

                    <button
                      className="btn btn-danger ms-1"
                      onClick={() => handlerDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-outline-dark me-1"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className="btn btn-outline-dark ms-1"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default AdminUsers;

{
  /* <Link to={`/admin/adminusers/${user.id}`} */
}
