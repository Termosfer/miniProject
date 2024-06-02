import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../components/styles.module.css";
import { getUserData } from "../auth/Auth";
import { UserContex } from "../context/UserContext";
const Header = () => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState();
  const { changeHandler } = useContext(UserContex);
  useEffect(() => {
    const getUserName = async () => {
      const response = await getUserData();
      setName(response);
      console.log("Setting name:", response);
    };
    getUserName();
  }, []);
  console.log("Current name state:", name);

  const logoutUser = async () => {
    localStorage.removeItem('token')
   /*  window.location.reload() */
setName(null)
   
}
  return (
    <nav className={`${styles.nav}`}>
      <div className={styles.logo}>
        <Link to="/">
          <h1 className={styles.h1}>WorK WaVe</h1>
        </Link>
      </div>

      <div className="d-flex align-items-center justify-content-center column-gap-4">
        <ul>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/favorites"> Favorites</NavLink>
        </ul>
        {name ? (
          <div className={styles.div}>
            <p className={styles.p} onClick={() => setActive(!active)}>
              Hello, {name}
            </p>
            {active && (
              <div className={styles.nested}>
                <Link className={styles.dashboard}  to="/admin/homepage" onClick={changeHandler}>
                  Dashboard
                </Link>
                <span className={styles.logout} onClick={() => logoutUser()}>
                  Logout
                </span>
              </div>
            )}
          </div>
        ) : (
          <Link className={styles.signin} to="/auth/signin">
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
