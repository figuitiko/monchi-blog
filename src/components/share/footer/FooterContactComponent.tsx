import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const FooterContactComponent = () => {
  return (
    <div className='flex mt-[48px] '>
      <div className='flex flex-col w-[361px] h-[56px]'>
        <span className='text-white font-inter font-normal text-[16px] leading-7 opacity-70'>Miami </span>
        <div className='flex gap-[0.5rem]'>
          <span className='text-white font-inter font-normal text-[16px] leading-7 opacity-70'>ffreenan@losserios.com</span>
          <span className='text-white font-inter font-normal text-[16px] leading-7 opacity-70'>+1 305 555 4444</span>
        </div>
      </div>
      <div className='flex ml-auto gap-[26px]'>
        <FaFacebook className='text-[#6D6E76]' />
        <FaTwitter className='text-[#6D6E76]' />
        <FaInstagram className='text-[#6D6E76]' />
      </div>
    </div>
  )
}

export default FooterContactComponent
