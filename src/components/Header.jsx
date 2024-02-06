import React from 'react'
import { easeInOut, motion } from "framer-motion"

export default function Header() {
    const title = "Boat."
    const words = title.split("")

    const mainTitle = {
        animate: {
            transition: {
                delayChildren: .3,
                staggerChildren: 0.2
            }
        }
    }

    const letters = {
        initial: {
            opacity: 0,
            top: 80
        },
        animate: {
            opacity: 1,
            top: 0,
            transition: {
                duration: 0.5,
                ease: easeInOut
            }
        }
    }
  return (
    <header>
        <motion.h1 
            variants={mainTitle}
            initial="initial"
            animate="animate"
        >
            {
                words.map((word, i) => {
                    return <motion.span key={i} variants={letters}>{word}</motion.span>
                })
            }
        </motion.h1>
    </header>
  )
}
