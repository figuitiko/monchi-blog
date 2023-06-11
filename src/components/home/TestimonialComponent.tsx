'use client'
import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import { motion } from 'framer-motion'
import { zoomIn } from '@/utils/motions'

const TestimonialComponent = () => {
  return (
    <section className='w-[1280px] h-[464px] mt-[128px] py-[80px] px-[112px] bg-[#FBF6EA] flex'>
      <motion.div
        variants={zoomIn(0.4, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='flex w-[541px] border-r-2'>
        <div className='w-[349px] mt-[12px] flex flex-col'>
          <h3 className='font-inter uppercase font-semibold text-[16px] leading-5 tracking-[3px] text-[#232536]'>Testimonios</h3>
          <h2 className='mt-[12px] font-sen font-bold  text-[36px] leading-[48px] tracking-[-2px] text-[#232536]'>Lo que  se dice de nosotros</h2>
          <small className='mt-[16px] font-inter font-normal text-[16px] leading-7 text-[#232536]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </small>
        </div>
      </motion.div>
      <motion.div
        variants={zoomIn(0.4, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TestimonialSlider />
      </motion.div>
    </section>
  )
}

export default TestimonialComponent