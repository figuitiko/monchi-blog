import HeroAbout from '@/components/about/HeroAbout'
import Mission from '@/components/about/Mission'
import React from 'react'

const About = () => {
  return (
    <div className=' flex flex-col items-center mt-[160px]'>
      <HeroAbout />
      <Mission />
    </div>
  )
}

export default About