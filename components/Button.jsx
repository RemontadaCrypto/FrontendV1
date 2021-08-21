import React from 'react'
import { motion } from "framer-motion"

const button = ({ onClick, type = "button", text, btnClass, icon }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.3, type: "tween" } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.3, type: "tween" } }}
            type={type}
            onClick={onClick}
            className={btnClass ? btnClass : ""}>
            {text}
            {icon && icon}
        </motion.button>
    )
}

export default button
