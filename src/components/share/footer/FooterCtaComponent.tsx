const FooterCtaComponent = () => {
  return (
    <div className='h-[256px] flex items-center px-[64px] py-[80px] bg-white bg-opacity-5  mt-[56px]'>
      <h3 className='font-sen text-[36px] text-white z-10 w-[562px]'>
        Subscribete a nuestro newsletter y recibe las últimas noticias y ofertas
      </h3>
      <form className='flex ml-auto gap-6'>
        <input type="text" placeholder='Correo electrónico' className='bg-[#4C4C4C] h-[56px] w-[323px] py-[14px] px-[24px]' />
        <button type='submit' className='flex items-center justify-center h-[56px] w-[179px] bg-[#FFD050]'>
          <span className='text-[#232536] font-sen font-bold text-[18px] leading-6'>Subscribete</span>
        </button>
      </form>
    </div>
  )
}

export default FooterCtaComponent