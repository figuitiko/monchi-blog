'use client'
import { motion } from 'framer-motion'
import SinglePostHeading from './SinglePostHeading'
import { fadeIn } from '@/utils/motions'

const data = [
  {
    id: 1,
    subHeading: 'By jhon Doe | May 23, 2023',
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
  },
  {
    id: 2,
    subHeading: 'By jhon Doe | May 23, 2023',
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
  },
  {
    id: 3,
    subHeading: 'By jhon Doe | May 23, 2023',
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
  },
  {
    id: 4,
    subHeading: 'By jhon Doe | May 23, 2023',
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
  }
]

const FeatureRightComponent = () => {
  return (
    <motion.div
    variants={fadeIn('left', 'tween', 0.2, 1)}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className='flex flex-col h-[804px] w-[517px]'>
      <h3 className='font-sen text-[32px] font-bold'>Todas las noticias</h3>
      <div className=' p-8 flex flex-col'>
      {
        data.map((item) => (
          <SinglePostHeading key={item.id} subHeading={item.subHeading} heading={item.heading} />
        ))
      }
      </div>
    </motion.div>
  )
}

export default FeatureRightComponent
