"use client"

import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"
import { motion } from "framer-motion"
import { Saira } from "next/font/google"
const NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Projetos",
        href: "/projects",
    },
]

const saira = Saira({
    variable: "--font-saira",
    subsets: ["latin"],
    weight: ["300"],
})

export const Header = () => {
    return (
        <motion.header
            className='absolute top-0 w-full z-10 h-24 flex items-center justify-center'
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='container flex items-center justify-between'>
                <Link href='/'>
                    {/* <Image 
                        width={58}
                        height={49}
                        src="/images/logo.svg"
                        alt="Logo GH Dev"
                    /> */}
                    <span
                        style={{
                            fontSize: "2rem",
                            fontFamily: `${saira}`,
                            color: "#0ea5e9",
                        }}
                    >
                        /*
                    </span>
                    <span
                        style={{
                            fontSize: "2rem",
                            fontFamily: `${saira}`,
                            color: "#fff",
                        }}
                    >
                        G.H DEV
                    </span>
                    <span
                        style={{
                            fontSize: "2rem",
                            fontFamily: `${saira}`,
                            color: "#0ea5e9",
                        }}
                    >
                        */
                    </span>
                </Link>
                <nav className='flex items-center gap-4 sm:gap-10'>
                    {NAV_ITEMS.map((item) => (
                        <NavItem {...item} key={item.label} />
                    ))}
                </nav>
            </div>
        </motion.header>
    )
}
