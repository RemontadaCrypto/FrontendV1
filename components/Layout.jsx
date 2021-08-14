import React from 'react'
import Image from "next/image"
import Link from "next/link"

const Layout = ({ children, text }) => {
    return (
        <section className="layout">
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
            {children}
        </section>
    )
}

export default Layout
