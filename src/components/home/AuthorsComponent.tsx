'use client'
import { fadeIn, slideIn, textVariant2 } from "@/utils/motions"
import AuthorsCarouselComponent from "./AuthorsCarouselComponent"
import { motion } from 'framer-motion'

const AuthorsComponent = () => {
  return (
    <section className='flex flex-col mt-[128px] h-[420px] w-[1280px] items-center'>
      <motion.div
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <h1 className='font-sen text-[36px] font-bold leading-[48px] tracking-[-2px] mb-[48px]'>Nuestros Autores</h1>
      </motion.div>
      <motion.div 
        variants={fadeIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <AuthorsCarouselComponent />
      </motion.div>
    </section>
  )
}

export default AuthorsComponent