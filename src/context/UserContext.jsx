import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const UserContex = createContext();
const UserProvider = ({ children }) => {
  const getUsersFromLocalStorage = () => {
    const storedUsers = localStorage.getItem("alluser");
    if (storedUsers) {
      try {
        return JSON.parse(storedUsers);
      } catch (error) {
        console.error( error);
      }
    }
    return [];
  };
  const [users, setUsers] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [total, setTotal] = useState();

  const [favorites, setFavorites] = useState(getUsersFromLocalStorage);
  const [active, setActive] = useState(true);
  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem("alluser", JSON.stringify(favorites));
  }, [favorites]);

const changeHandler = ()=>{
  setActive(!active)
}

  const getData = async (page) => {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    setUsers(response.data.data);
    setCurrentPage(response.data.page);
    setTotalPages(response.data.total_pages);
    setTotal(response.data.total);
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      getData(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getData(currentPage - 1);
    }
  };

  const deleteHandler = async (id) => {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    const removeUser = users.filter((user) => user.id !== id);
    setUsers(removeUser);
  };

  const removeFavorites = (id) => {
    const removeUser = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(removeUser);
  };

  const favoritesHandler = (user) => {
    if (favorites.find((favorite) => favorite.id === user.id)) {
      toast.error(`${user.first_name} already added`);
      return;
    } else {
      setFavorites([...favorites, user]);
      toast.success(`${user.first_name} successfully added`);
    }
  };

  const isFavorite = (userId) => {
    return favorites.find((user) => user.id === userId);
  };

  return (
    <UserContex.Provider
      value={{
        isFavorite,
        nextPage,
        prevPage,
        currentPage,
        totalPages,
        users,
        setUsers,
        total,
        deleteHandler,
        favoritesHandler,
        favorites,
        removeFavorites,
        changeHandler,
        active
      }}
    >
      {children}
    </UserContex.Provider>
  );
};

export { UserProvider, UserContex };
