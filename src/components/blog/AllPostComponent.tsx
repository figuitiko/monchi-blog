import { IPost } from '@/types'
import React from 'react'
import PostBoxComponent from './PostBoxComponent'
interface Props {
  posts: IPost[]
}
const AllPostComponent = ({posts}: Props) => {
  return (
    <>
    <div className='w-[1282px] flex flex-col mt-[64px] mb-8'>
      <div className='flex w-[1282px] h-[96px] border-b-2' >
        <h3 className='text-[48px] font-sen font-bold leading-[64px] tracking-[-2px]'> Todos los posts</h3>
      </div>
        {
          posts.map((post) => (
            <PostBoxComponent key={post.id} post={post} />
          ))
        }
    </div>   
    </>
  )
}

export default AllPostComponent