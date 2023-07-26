'use client'
import { motion } from 'framer-motion'
import AboutItemComponent from './AboutItemComponent'

const AboutUsComponent = () => {
  return (
    <motion.section
    initial={{ opacity: 0, x: -200 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 1 }}
    className='flex flex-col w-full px-[80px] items-center'>
      <div className='flex h-[23px] w-[1280px] flex-row-reverse '>
        <div className='w-[282px] bg-[#592EA9]' />
        <div className='w-[779px] bg-[#FFD050]' />
      </div>
      <div className='w-[1280px] h-[500px] bg-[#F4F0F8] py-[96px] pl-[80px] flex gap-[61px]'>
        <AboutItemComponent
          title='Sobre Nosotros'
          heading='Apasionados del deporte: Conectando análisis y pronósticos para impulsar tu éxito'
          description='Somos un equipo de profesionales apasionados por el deporte, que a través de la tecnología y el análisis de datos, buscamos impulsar el éxito de nuestros usuarios.'
          isReadMore={true}
          />
        <AboutItemComponent
          title='Nuestra Misión'
          heading='Conectar el análisis y los pronósticos deportivos para impulsar el éxito de nuestros usuarios'
          description='Somos un equipo de profesionales apasionados por el deporte, que a través de la tecnología y el análisis de datos, buscamos impulsar el éxito de nuestros usuarios.'
        />
      </div>
    </motion.section>
  )
}

export default AboutUsComponent
