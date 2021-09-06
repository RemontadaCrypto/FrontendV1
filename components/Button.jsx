import React from "react";
import { motion } from "framer-motion";

const buttonTransition = (clicked) => {
  if (!clicked) {
    return { scale: 0.9, transition: { duration: 0.3, type: "tween" } };
  }

  return {};
};

const button = ({
  onClick,
  text,
  btnClass,
  icon,
  style,
  type = "button",
  clicked = false,
}) => {
  return (
    <motion.button
      whileTap={buttonTransition(clicked)}
      type={type}
      onClick={onClick}
      style={{ ...style }}
      clicked={clicked}
      className={btnClass ? btnClass : ""}
    >
      {text}
      {icon && icon}
    </motion.button>
  );
};

export default button;
