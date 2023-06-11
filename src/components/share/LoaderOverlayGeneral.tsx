'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const LoaderOverlayGeneral = () => {
  const [isVisible, setIsVisible] = useState(true) 
  useEffect(() => {        
    const timer = setTimeout(() => {
      setIsVisible((prev) => !prev)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-80  z-50'
      >
          <motion.div
            className='flex w-[200px] h-[200px] bg-ball bg-no-repeat bg-cover '
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%']
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          />

      </motion.div>
    )}
  </AnimatePresence>
  )
}

export default LoaderOverlayGeneral