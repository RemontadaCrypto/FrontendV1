import React from 'react'
import { motion } from "framer-motion"

const Modal = ({ handleClose, children }) => {
    return (
        <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "tween" }}
            className="modal">
            <section className="modal__main">
                <svg role="button" onClick={handleClose} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="8" fill="#DBE9FF" />
                    <path d="M20.0002 18.586L24.9502 13.636L26.3642 15.05L21.4142 20L26.3642 24.95L24.9502 26.364L20.0002 21.414L15.0502 26.364L13.6362 24.95L18.5862 20L13.6362 15.05L15.0502 13.636L20.0002 18.586Z" fill="#142136" />
                </svg>
                <section className="modal__child">
                    {children}
                </section>
            </section>
        </motion.section>
    )
}

export default Modal
