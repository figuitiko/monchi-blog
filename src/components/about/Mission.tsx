import React from 'react'
import WhyComponent from './WhyComponent'

const Mission = () => {
  return (
    <section id='mission'>
      <div className='flex flex-col bg-about w-[1280px] h-[444px] justify-end '>
        <div className='w-[861px] flex ml-[109px]'>
          <div className='w-[311px] h-[23px] bg-[#592EA9]' />
          <div className='w-[550px] h-[23px] bg-[#FFD050]' />
        </div>
      </div>
      <div className='w-[1280px] h-[441px] flex gap-8 items-center justify-center pt-[128px] px-[109px] pb-[64px] bg-[#F4F0F8]'>
        <div className='w-1/2 flex flex-col gap-[24px]'>
          <h2 className='font-inter text-[1rem] font-semibold uppercase leading-5 tracking-[3px]'>Nuestra Misión</h2>
          <h1 className='font-sen text-[28px] font-bold leading-[40px] tracking-[-1px] '>Somos el impulso que </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className='w-1/2 flex flex-col gap-[24px'>
          <h2 className='font-inter text-[1rem] font-semibold uppercase leading-5 tracking-[3px]'>Nuestra Visión</h2>
          <h1 className='font-sen text-[28px] font-bold leading-[40px] tracking-[-1px] '>Somos el impulso que </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </p>
        </div>
        
      </div>
      <WhyComponent />

    </section>
  )
}

export default Mission