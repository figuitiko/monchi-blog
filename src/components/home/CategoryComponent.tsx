'use client'
import { textVariant } from '@/utils/motions'
import CatBoxItemComponent, { iconCats } from './CatBoxItemComponent'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Fútbol',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'soccer'
  },
  {
    title: 'Baloncesto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'basketball'
  },
  {
    title: 'Baseball',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'baseball'
  },
  {
    title: 'Futbol Americano',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'american'
  }
]

const CategoryComponent = () => {
  let delay = 0
  return (
    <section id='categories' className='flex flex-col mt-[128px] px-[80px] w-full h-[324px] items-center '>
      <motion.div
      variants={textVariant(0.5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      >
        <h3 className='font-sen text-[36px] font-bold leading-[48px]'>Escoge una Categoría</h3>
      </motion.div>
      <div className='flex gap-8 mt-12'>
        {
          categories.map((category) => {
            delay += 0.5
            return (
              <CatBoxItemComponent
                key={category.title}
                title={category.title}
                description={category.description}
                icon={(category.icon) as keyof typeof iconCats}
                delay={delay}
              />
            )
          }
          )
        }
      </div>
    </section>
  )
}

export default CategoryComponent
