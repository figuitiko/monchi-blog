import Image from 'next/image'
import FooterNavbarComponent from './FooterNavbarComponent'
import FooterCtaComponent from './FooterCtaComponent'
import FooterContactComponent from './FooterContactComponent'

export const FooterComponent = () => {
  return (
    <footer className='w-full h-[560px] bg-[#232536] mt-[128px] px-[80px]  py-[56px] flex flex-col'>
      <div className='flex'>
        <picture className='flex flex-col'>
          <Image src='/logo.png' alt='logo' width={128} height={50} />
        </picture>
        <FooterNavbarComponent />
      </div>
      <FooterCtaComponent />
      <FooterContactComponent />
    </footer>
  )
}
