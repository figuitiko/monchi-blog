import Image from "next/image"

interface Props {
  heading: string
  subHeading: string
  excerpt: string
  haveShape?: boolean
  isRight?: boolean
}
const images = {
  left: '/ground-group-growth-hands.png',
  right: '/three-persons-sitting-on-the-stairs-talking-with-each-other.png'
}
const WhyItemComponent = ({ heading, subHeading, excerpt, haveShape, isRight }: Props) => {
  const imageUrl = isRight ? images.right : images.left
  return (
    <div className={`flex w-[1280px] h-[480px] relative mt-[128px] ${isRight && 'flex-row-reverse'} gap-4  `}>
      <div className={`w-1/2 flex flex-col justify-center ${isRight && 'ml-16'}`}>
        <h3 className='font-sen text-[36px] font-bold leading-[48px] tracking-[-2px] max-w-[519px]'>
          {heading}
        </h3>
        <span className='font-sen text-[24px] font-bold leading-[32px] max-w-[519px]'>
          {subHeading}
        </span>
        <p className='max-w-[519px]'>
          {excerpt}
        </p>
      </div>
      {
        haveShape && (
          <div className='w-[103px] h-[116px] bg-[#FFD050] rounded-tl-3xl m-auto z-10 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]' />
        )
      }
      <picture className='w-1/2'>
        <Image src={imageUrl} alt='why-item' width={640} height={480} />
      </picture>
    </div>
  )
}

export default WhyItemComponent