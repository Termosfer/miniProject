import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContex } from "../../context/UserContext";
import { FaPager } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import styles from "../styles.module.css";
import Aos from "aos";
const HomePage = () => {
  const { totalPages, total, favorites } = useContext(UserContex);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className={styles.containerDiv}>
        <h1 className={styles.containerh1}>All Details: </h1>
        <div
          className={styles.allDetails}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <FaPager className={styles.allDetailsIcons} />
          <h2>Pages:<span className={styles.span}>{totalPages}</span></h2>
        </div>
        <div
          className={styles.allDetails}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <FaChalkboardUser className={styles.allDetailsIcons} />
          <h2 >Users:<span className={styles.span}>{total}</span></h2>
        </div>
        <div
          className={styles.allDetails}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <AiFillLike className={styles.allDetailsIcons} />
          <h2>Favorites:<span className={styles.span}>{favorites.length}</span></h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
