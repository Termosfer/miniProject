import React from "react";
import Sidebar from "../admin/Sidebar/sidebar";
import styles from "../layout/styles.module.css"
const AdminLayout = (props) => {
  return (
    <div className={styles.adminLayout}>
      <Sidebar/>
      <main className={`${styles.main} col-9 `}>{props.children}</main>
    </div>
  );
};

export default AdminLayout;
