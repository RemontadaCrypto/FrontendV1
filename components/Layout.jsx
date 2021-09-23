import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { logOutUser } from "../redux/actions/user.action";

const Layout = ({ children, text, url }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  const router = useRouter();

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
