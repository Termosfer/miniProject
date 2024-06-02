import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import HomePage from "../admin/HomePage/HomePage";
import AdminUsers from "../admin/Users/AdminUsers";
import Update from "../components/Update";

const AdminRoutes = () => {
  return (
    <>
      <AdminLayout>
        <Routes>
          <Route path="/admin/homepage" element={<HomePage />} />
          <Route path="/admin/adminusers" element={<AdminUsers />} />
          {<Route path="/update/:id" element={<Update/>}/>}
        </Routes>
      </AdminLayout>
    </>
  );
};

export default AdminRoutes;
