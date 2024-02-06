import React, { useEffect, useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import './Loader.css'

export default function Loader({ setIsLoading }) {
    const [counter, setCounter] = useState(0)
    
    const counterVar = {
        animate: {
            opacity: 0,
            transition: {
                duration: 0.5,
                delay: 0.2
            }
        }
    }
    const curtains = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    }
    const bar = {
        animate: {
            y: "-100%",
            transition: {
                duration: 0.2,
                ease: easeInOut,
            }
        }
    }

    useEffect(() => {
        const incrementCounter = () => {
            if(counter === 100){
                return
            }

            const randomNum = Math.floor(Math.random() * 10) + 1
            setCounter(prevCounter => prevCounter + randomNum)

            if(counter > 100){
                setCounter(100)
            }
        }

        let delay = Math.floor(Math.random() * 200) + 50
        setTimeout(incrementCounter, delay)

        // incrementCounter()

        return () => {
            clearTimeout(incrementCounter)
        }
    }, [counter])

  return (
    <div 
        className="loader"
    >
        <motion.div 
            className="counter"
            variants={counterVar}
            animate={counter === 100 ? "animate" : ""}
        >{counter}</motion.div>
        <motion.div 
            className="curtains"
            variants={curtains}
            animate= { counter === 100 ? "animate" : ""}
            onAnimationComplete={() => setIsLoading(false)}
        >
            <motion.div className="curtains-bar" variants={bar}></motion.div>
            <motion.div className="curtains-bar" variants={bar}></motion.div>
            <motion.div className="curtains-bar" variants={bar}></motion.div>
            <motion.div className="curtains-bar" variants={bar}></motion.div>
            <motion.div className="curtains-bar" variants={bar}></motion.div>
            <motion.div className="curtains-bar" variants={bar}></motion.div>
            <motion.div className="curtains-bar" variants={bar}></motion.div>
            <motion.div className="curtains-bar" variants={bar}></motion.div>
            <motion.div className="curtains-bar" variants={bar}></motion.div>
            <motion.div className="curtains-bar" variants={bar}></motion.div>
        </motion.div>
    </div>
  )
}
