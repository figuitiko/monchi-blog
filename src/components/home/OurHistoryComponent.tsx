'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motions'

const OurHistoryComponent = () => {
  return (
    <section className='flex mt-[128px] mx-[80px] w-[1280px] h-[705px] p-0 relative'>
      <motion.picture
        variants={fadeIn('up', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      className='w-[949px]'>
        <Image src='/our-history.jpg' width={949} height={705} alt='history' />
      </motion.picture>
      <motion.div
        variants={fadeIn('down', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col absolute z-10 right-0 bottom-0 w-[706px] h-[584px] p-[80px] bg-white'>
        <h4 className='text-[1rem] uppercase font-inter font-bold text-[#232536] leading-5 tracking-[3px]'>Por qué comenzamos</h4>
        <h3 className='font-sen text-[48px] mt-[24px] font-bold leading-[64px] tracking-[-2px] text-[#232536]'>Comenzó como una idea simple y evolucionó en nuestra pasión.</h3>
        <p className='mt-[1rem] font-inter font-normal text-[1rem] leading-7'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <button className='w-[269px] h-[56px] flex items-center justify-center bg-[#FFD050] mt-[32px] hover:border hover:border-black'>
         <span className='text-[1rem] font-inter font-bold text-[#232536]'> {'Descubre nuestra Historia >'}</span>
          </button>
      </motion.div>
    </section>
  )
}

export default OurHistoryComponent
