import React from "react";
import Layout from "../layout/Layout";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/MainPage";
import Users from "../pages/Users/Users";
import Likes from "../pages/Likes/Likes";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Error from "../pages/Error/Error";
const GeneralRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
        <Route path="/favorites" element={<Likes />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
};

export default GeneralRoutes;
