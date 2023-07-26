'use client'
import { fadeIn } from '@/utils/motions'
import { motion } from 'framer-motion'
import Image from 'next/image'

const FeatureLeftComponent = () => {
  return (
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='flex flex-col w-[732px] h-[804px]'>
      <h3 className='font-sen text-[32px] font-bold'>Nota del día</h3>
      <div className='mt-8 p-8 flex flex-col'>
        <Image src='/feature_post.jpg' width={600} height={352} alt='feature-post' />
        <small className='mt-8 font-inter text-xs text-[#4C4C4C]'>By jhon Doe | May 23, 2023</small>
        <h3 className='mt-4 font-sen font-bold text-[28px] leading-[40px] tracking-[-1px] text-[#232536]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h3>
        <p className='font-inter leading-[28px] text-[1rem] font-normal text-[#6D6E76]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className='bg-[#FFD050] w-[204px] h-[56px] flex justify-center items-center mt-8 hover:border-2 hover:border-black' >
          <span className='text-[#232536] font-bold'>{'Leer más >'}</span>
        </button>
      </div>
    </ motion.div>
  )
}

export default FeatureLeftComponent
