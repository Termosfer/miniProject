import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../layout/styles.module.css";
const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
