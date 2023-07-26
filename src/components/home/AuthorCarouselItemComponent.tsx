import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

interface ISocialNetworks {
  facebook: string
  twitter: string
  instagram: string
}
export interface IAuthor {
  name: string
  role: string
  imageUrl: string
  socialNetworks: ISocialNetworks
}
interface Props {
  author: IAuthor
}

type ISocialIcons = Record<string, JSX.Element>

const socialIcons: ISocialIcons = {
  facebook: <FaFacebook />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />
}

const AuthorCarouselItemComponent = ({ author }: Props) => {
  const { name, role, imageUrl, socialNetworks } = author
  return (
    <div className='flex flex-col items-center flex-1 bg-[#F4F4F4] hover:bg-[#FBF6EA] py-[40px]'>
      <picture className='h-[128px] w-[128px] rounded-full mb-[20px]'>
        <Image className='rounded-full' src={imageUrl} alt={name} width={200} height={200} />
      </picture>
      <div className='flex flex-col items-center'>
        <span className='text-[#592EA9] font-bold text-[16px] leading-[24px] '>{name}</span>
        <span className='text-[#6D6E76] font-inter text-[16px] leading-[24px]'>{role}</span>
        <div className='flex mt-[20px] gap-4'>
          {
            Object.keys(socialNetworks).map((item: string, index: number) => {
              const key = item as keyof ISocialNetworks
              return (
                <a href={socialNetworks[key]} key={index} target='_blank' rel='noreferrer'>
                  {socialIcons[key]}
                </a>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default AuthorCarouselItemComponent
