import React from 'react'
import Link from 'next/link'
interface Props {
  url: string
  text: string
}

const BtnLinkComponent = ({ url, text }: Props) => {
  return (
    <Link className='flex justify-center items-center bg-[#FFD050] w-[204px] h-[56px] hover:border-2 hover:border-[#232536] px-12 py-4' href={url} >
      <span className='font-sen font-bold text-[#232536] '>
        {`${text} >`}
      </span>
    </Link>
  )
}

export default BtnLinkComponent
