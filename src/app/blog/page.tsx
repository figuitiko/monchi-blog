import AllPostComponent from '@/components/blog/AllPostComponent'
import FeaturePostComponent from '@/components/blog/FeaturePostComponent'
import { mapPostFromApiToPost } from '@/utils/formatters'

const Blog = async () => {
  const res = await fetch('https://acygp.com/serios/wp-json/wp/v2/posts?orderby=date&order=desc', { cache: 'no-store' })
  const totalPage = res.headers.get('X-WP-TotalPages')
  console.log('totalPage', totalPage)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  const featurePost = data[0]
  const formattedFeaturePost = await mapPostFromApiToPost(featurePost)
  const postsAll = data.slice(1)
  const formattedPostsAll = await Promise.all(postsAll.map(mapPostFromApiToPost))
  return (
    <div className='flex flex-col items-center'>
      <FeaturePostComponent {...formattedFeaturePost} />
      <AllPostComponent posts={formattedPostsAll} />
    </div>
  )
}

export default Blog
