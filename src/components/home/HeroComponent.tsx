'use client'
import { motion } from 'framer-motion'
interface Props {
  children: React.ReactNode
}
const HeroComponent = ({children}: Props) => {
  return (
    <motion.section 
      id='hero'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 1 }} 
      className='flex  w-full h-[720px] bg-hero bg-no-repeat bg-cover pl-[80px] pr-[556px] pt-[128px] pb-[192px]'>
      {children}
    </motion.section>
  )
}

export default HeroComponent