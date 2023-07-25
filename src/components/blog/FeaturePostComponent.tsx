import { IPost } from '@/types'
import Image from 'next/image'
import BtnLinkComponent from '../share/BtnLinkComponent'

const FeaturePostComponent = (post: IPost) => {
  const { id, title, date, author, excerpt, imageUrl } = post
  return (
    <div className='w-full h-[519px] p-20 flex justify-center gap-[141px] bg-[#F4F0F8] py-8'>
      <div className='w-[624px] flex flex-col '>
        <h2 className='font-inter font-medium  text-[1rem] leading-5 tracking-[3px] text-[#232536] uppercase'>
          Feature Post
        </h2>
        <h1 className='font-sen font-bold text-3xl mt-[20px] mb-[1rem] tracking-[2px] leading-[48px] ' >
          {title}
        </h1>
        <span className='font-inter font-medium text-[14px] leading-5'>{`Por ${author} | ${date}`}</span>
        <div className='font-inter font-normal leading-7 mt-[1rem] mb-[2rem]' dangerouslySetInnerHTML={{ __html: excerpt as string }} />
        <BtnLinkComponent url={`/blog/${id}`} text='Leer más' />
      </div>
      <picture className='w-[515px] h-[359px]' >
        {
          imageUrl ?
            (<Image src={imageUrl} width={515} height={359} alt={post.title} />) :
            (<Image src='/default_placeholder.png' width={515} height={359} alt={post.title} />)
        } 
      </picture>

    </div>
  )
}

export default FeaturePostComponent