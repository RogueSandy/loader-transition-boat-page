import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Image() {
    const [mousePos, setMousePos] = useState({x: 0, y: 0})
    const [mouseEvent, setMouseEvent] = useState(false)

    useEffect(() => {
        const mouseMove = e => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            })
        }

        if(mouseEvent){
            mouseMove()
        }
        // window.addEventListener('mousemove', mouseMove)

        // return window.removeEventListener('mousemove', mouseMove)
    }, [])

    const mouseCursor = {
        animate: {
            x: mousePos.x,
            y: mousePos.y,
            display: "block"
        },
        hide: {
            display: "none"
        }

    }

  return (
    <>
        <motion.div 
            className='cursor'
            variants={mouseCursor}
            animate="animate"
        ></motion.div>
        <img 
            src="src/assets/BoatModal.jpg"
            alt="Boat Modal" 
        />
    </>
  )
}
