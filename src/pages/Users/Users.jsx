import axios from "axios";
import styles from "../styles.module.css";
import React, { useEffect, useState } from "react";
import UserList from "../../components/UserList";
import PropagateLoader from "react-spinners/PropagateLoader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${currentPage}`
        );
        setUsers((prevUsers) => [...prevUsers, ...response.data.data]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [currentPage]);
  const loadHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="container d-flex flex-column w-100">
        <div className="row">
          {users ? (
            users.map((user) => {
              return <UserList key={user.id} user={user} />;
            })
          ) : (
            <PropagateLoader color="#36d7b7" />
          )}
        </div>
        {currentPage < totalPages && (
          <button className={`${styles.onload}`} onClick={loadHandler}>
            onLoad
          </button>
        )}
      </div>
    </>
  );
};

export default Users;
