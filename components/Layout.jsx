import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Layout = ({ children, text }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2, type: "tween" } }}
            className="layout">
            <header className="flex-ac-jb">
                <Link href="/">
                    <a>
                        <Image src="/logo.svg" width={176} height={32} />
                    </a>
                </Link>
                {text &&
                    <Link href={text.toLowerCase()}>
                        <a>{text}</a>
                    </Link>}
            </header>
            <section className="layout__child flex-ac-jc">
                {children}
            </section>
        </motion.section>
    )
}

export default Layout
