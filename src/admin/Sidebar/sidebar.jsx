import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import styles from "../styles.module.css";
import { UserContex } from "../../context/UserContext";
const sidebar = () => {
  const { changeHandler } = useContext(UserContex);
  return (
    <div
      className="col-3 bg-dark text-white"
      style={{ minWidth: "200px", minHeight: "100vh" }}
    >
      <div className={styles.sidebar}>
        <h2>Sidebar</h2>
        <div className={styles.logout}>
          <Link className="text-white text-decoration-none" onClick={changeHandler} to="/users">
            <p className={styles.p} >
              <CiLogout />
              LogOut
            </p>
          </Link>
        </div>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/admin/homepage"
            className="nav-link active"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/admin/adminusers" className="nav-link text-white">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default sidebar;
