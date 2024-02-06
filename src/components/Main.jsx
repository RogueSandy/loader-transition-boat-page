import React from 'react'
import Nav from './Nav'
import './Main.css'
import { easeInOut, motion } from 'framer-motion'
import Header from './Header'

export default function Main() {
  return (
    <main>
        <Nav />
        <Header />
        <motion.section 
          className='image'
          initial={{y: 100, opacity: 0}}
          animate={{
            y: 0, 
            opacity: 1, 
            transition: {
              delay: 1, 
              duration: 1,
              ease: easeInOut
            }
          }}
        >
            <img src="src/assets/BoatModal.jpg" alt="Boat Modal" />
        </motion.section>
    </main>
  )
}
