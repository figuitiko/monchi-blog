'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

interface ITestimonial {
  id: number
  name: string
  country: string
  province: string
  text: string
  image: string
}
const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: 'Eynar  Fajardo',
    country: 'Cuba',
    province: 'Santiago de Cuba',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/testimonial/eynar.png'
  },
  {
    id: 2,
    name: 'Emigdio Perez',
    country: 'EEUU',
    province: 'California',
    text: 'Ipsum amet sit dolor elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/testimonial/emilitin.png'
  },
  {
    id: 3,
    name: 'Juan Serrano',
    country: 'EEUU',
    province: 'Houston',
    text: 'consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, ',
    image: '/testimonial/juan.png'
  }
]

const TestimonialSlider = () => {
  const [testimonialsState] = useState<ITestimonial[]>(testimonials)
  const [activeId, setActiveId] = useState<number>(0)
  const activeTestimonial = testimonialsState[activeId] ? testimonialsState[activeId] : testimonialsState[0]
  const { name, country, province, image } = activeTestimonial
  const handleNext = () => {
    if (activeId < testimonialsState.length - 1) {
      setActiveId(activeId + 1)
    }
  }
  const handlePrev = () => {
    if (activeId > 0) {
      setActiveId(activeId - 1)
    }
  }
  return (
    <div className='flex flex-col ml-[96px]'>
      <p className='w-[469px] font-sen font-bold text-[24px] leading-6 text-[#232536] '>
        {
          activeTestimonial?.text
        }
      </p>
        <div className='flex mt-[121px] gap-4'>
          <picture className=''>
            <Image className='rounded-full' src={image} alt={name} width={48} height={48} />
          </picture>
          <div className='flex flex-col'>
            <h3 className=''>{name}</h3>
            <small className=''>{country + ',' + province}</small>
          </div>
          <div className='flex ml-auto gap-4'>
            {
              activeId !== 0 && (
                <button className='w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center' onClick={handlePrev}><FiArrowLeft /> </button>
              )
            }
            {
              activeId !== testimonialsState.length - 1 && (
                <button className='w-[48px] h-[48px] bg-[#232536] rounded-full flex justify-center items-center' onClick={handleNext}><FiArrowRight className='text-white' /></button>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default TestimonialSlider
