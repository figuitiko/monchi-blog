'use client'
import { IPost } from '@/types'
import Image from 'next/image'
import { Parser } from 'html-to-react'

const PostDetails = ({author, avatarUrl, date, title, imageUrl, content}:IPost) => {
  return (
    <div className='flex flex-col items-center'>
    <div className='flex flex-col w-[768px] h-[282px] mt-[128px]'>
      <div className='flex gap-4 items-center'>
        <picture>
          <Image className='rounded-full' src={(avatarUrl) as string} width={48} height={48} alt={author} />
        </picture>
        <div className='flex flex-col'>
          <h3 className='font-sen text-[28px] text-[#592EA9] font-bold leading-10 tracking-[-1px]'>{author}</h3>
          <span className=''>{`Publicado ${date}`}</span>
        </div>
      </div> 
      <h1 className='my-[24px] text-[48px] font-bold leading-[64px] tracking-[-2px]'>
        {title}
      </h1>
    </div>
      <picture className='my-[64px]' >
        <Image src={(imageUrl) as string} width={1280} height={582} alt={title} />
      </picture>
      <div className='font-inter font-normal leading-7  mb-[2rem] max-w-[843px] ' >
       
       {
        Parser().parse(content)
       }
      </div>   
  </div>
  )
}

export default PostDetails