import React from "react";
import { motion } from "framer-motion";

const Layout = ({ children, text, url }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2, type: "tween" } }}
      className="layout"
    >
      <section className="layout__child flex-ac-jc">{children}</section>
    </motion.section>
  );
};

export default Layout;
