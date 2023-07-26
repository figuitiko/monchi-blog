
import { dateFormatter } from '@/utils/formatters'
import PostDetails from './PostDetails'
import { IPost } from '@/types'
interface Props {
  params: {
    id: string
  }
}

const IndividualPost = async ({ params }: Props) => {
  const res = await fetch(`https://acygp.com/serios/wp-json/wp/v2/posts/${params.id}?_embed`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  const author = data._embedded.author[0]
  const avatarUrl = author.avatar_urls['48']
  const authorName = author.name
  const date = dateFormatter(data.date)
  const title = data.title.rendered
  let featuredImageUrl = '/default_placeholder.png'
  if (data._embedded?.['wp:featuredmedia']) {
    featuredImageUrl = data._embedded['wp:featuredmedia'][0].source_url
  }
  const content = data.content.rendered
  const post: IPost = {
    id: data.id,
    author: authorName,
    avatarUrl,
    date,
    title,
    imageUrl: featuredImageUrl,
    content
  }
  // console.log('avatar', avatarUrl)
  // console.log('author', data._embedded.author[0])
  return (
    <PostDetails {...post} />
  )
}

export default IndividualPost
