import React, { useContext, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "../styles.module.css";
import { UserContex } from "../../context/UserContext";
import Aos from "aos";
const FavoritesPage = () => {
  const { favorites, removeFavorites } = useContext(UserContex);

  useEffect(() => {
    Aos.init();
  }, []);

  if (favorites.length === 0) {
    return (
      <div
      data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="900"
        className={styles.card}
      >
        <p>No Any Favorities</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        {favorites.map((user) => (
          <div key={user.id} className="col-lg-4">
            <div className="card my-2 text-center p-2">
              <FaHeart
                className={styles.heart}
                onClick={() => removeFavorites(user.id)}
              />
              <div className="card-body">
                <p className="card-text fs-6">{user.email}</p>
                <p className="card-text fs-2">
                  {user.first_name} {user.last_name}
                </p>
              </div>
              <img
                src={user.avatar}
                className={`${styles.avatar} card-img-top`}
                alt={user.first_name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
