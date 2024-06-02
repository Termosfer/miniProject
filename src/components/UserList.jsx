import { useContext } from "react";
import styles from "./styles.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserContex } from "../context/UserContext";
const UserList = ({ user }) => {
  const { favoritesHandler, removeFavorites, isFavorite } = useContext(UserContex);
 
  const handleFavoriteToggle = () => {
    if (isFavorite(user.id)) {
      removeFavorites(user.id);
    } else {
      favoritesHandler(user);
    }
  };


  return (
    <div className="col-lg-4">
      <div className={styles.cardDetails}>
        <div className="card my-2 text-center p-2">
          <div onClick={handleFavoriteToggle}>
          {isFavorite(user.id) ? (
              <FaHeart className={styles.heart} />
            ) : (
              <FaRegHeart className={styles.heart} />
            )}
          </div>
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
    </div>
  );
};

export default UserList;

/* 
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { UserContex } from "../context/UserContext";
import toast, { Toaster } from "react-hot-toast";

const UserList = ({ user }) => {
  const { email, first_name, last_name, avatar } = user;
  const { addtoFavorites } = useContext(UserContex);

  const handleAddToFavorites = (user) => {
    addtoFavorites(user);
  };
  return (
    <div className="col-lg-4">
      <div className={styles.cardDetails}>
        <div className="card my-2 text-center">
          <div className="card-body">
            <p className="card-text">{email}</p>
            <p className="card-text">
              {first_name} {last_name}
            </p>
          </div>
          <img
            src={avatar}
            className={`${styles.avatar} card-img-top`}
            alt={first_name}
          />
          <button
            className="btn btn-success my-2 w-50 mx-auto fs-5"
            onClick={() => handleAddToFavorites(user)}
          >
            Add To Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
 */
