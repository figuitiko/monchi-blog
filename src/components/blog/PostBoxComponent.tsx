import { IPost } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { Parser } from 'html-to-react'
interface Props {
  post: IPost
}

const PostBoxComponent = ({post}: Props) => {
  return (
    <div className='flex mt-[64px]'>
      <picture>
        {
          post.imageUrl ? (<Image src={post.imageUrl} width={490} height={318} alt={post.title} />) :
          (<Image src='/default_placeholder.png' width={490} height={318} alt={post.title} />)
        }        
      </picture>
      <div className='flex items-center pl-8'>
        <div className='flex flex-col w-[624px] h-[208px]'>          
            {post.categories?.map((category, id) => (
              <span key={`${category}${id}`} className='text-[#592EA9] text-inter text-[1rem] uppercase leading-5 tracking-[3px] font-semibold'>
               { id===0 ? category : ` | ${category}`}
              </span>
            ))
            }
            <Link href={`/blog/${post.id}`}>
            <h2 className='font-sen font-bold text-[36px] leading-[48px] mt-4'>
              {post.title}
            </h2>
            </Link>
            <div className='font-inter font-normal leading-7 mt-[1rem] mb-[2rem]' >
              {
                Parser().parse(post.excerpt)
              }
            </div>      
        </div>
      </div>
    </div>
  )
}

export default PostBoxComponent
