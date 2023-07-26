'use client'
import { IoBaseballOutline, IoBasketballOutline, IoAmericanFootballOutline, IoFootballOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
interface Props {
  title: string
  description: string
  icon: keyof typeof iconCats
  delay?: number
}
export const iconCats = {
  baseball: <IoBaseballOutline className='w-[38px] h-[38px]' />,
  basketball: <IoBasketballOutline className='w-[38px] h-[38px]' />,
  american: <IoAmericanFootballOutline className='w-[38px] h-[38px]' />,
  soccer: <IoFootballOutline className='w-[38px] h-[38px]' />

}

const CatBoxItemComponent = ({ title, description, icon, delay }: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 1, delay }}
      className='w-[296px] h-[228px] flex flex-col p-8 border border-[#6D6E76] hover:bg-[#FFD050] hover:border-0 cursor-pointer'>
      <div className='flex items-center justify-center w-[48px] h-[48px]'>
        {
          iconCats[icon]
        }
      </div>
      <h3 className='font-sen font-bold text-[28px] leading-[40px] tracking-[-1px] text-[#232536]'>
        {title}
      </h3>
      <p className='font-inter leading-[28px] text-[1rem] font-normal text-[#6D6E76]'>
        {description}
      </p>
    </motion.div>
  )
}

export default CatBoxItemComponent
