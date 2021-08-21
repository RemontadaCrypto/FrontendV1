import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { RiArrowLeftLine } from "react-icons/ri";

const MainLayout = ({ children, text, url }) => {
    const router = useRouter()
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2, type: "tween" } }}
            className="layout main">
            <header className="flex-ac-jb">
                <Link href="/">
                    <a>
                        <Image src="/logo.svg" width={176} height={32} />
                    </a>
                </Link>
                {text &&
                    <Link href={url}>
                        <a>{text}</a>
                    </Link>}
            </header>
            <section className="layout__child">
                <nav className="layout__child__nav">
                    <span role="button" onClick={() => router.back()}>
                        <RiArrowLeftLine />Back
                </span>
                </nav>
                <section className="layout__child__main flex-ac-jc">
                    {children}
                </section>
            </section>
        </motion.section>
    )
}

export default MainLayout
