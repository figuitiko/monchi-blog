import { IPost, IRawPost } from '@/types'

// date formatter function to convert date to a readable format
export const dateFormatter = (date: Date): string => {
  date = new Date(date)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const mapPostFromApiToPost = async (post: IRawPost): Promise<IPost> => {
  const featureImageRequest = await fetch(`https://acygp.com/serios/wp-json/wp/v2/media/${post.featured_media}`)
  let featureImage
  if (featureImageRequest.ok) {
    const featureImageData = await featureImageRequest.json()
    featureImage = featureImageData.media_details.sizes.full.source_url
  }
  const authorRequest = await fetch(`https://acygp.com/serios/wp-json/wp/v2/users/${post.author}`)
  if (!authorRequest.ok) {
    throw new Error('Error fetching author data')
  }
  const authorData = await authorRequest.json()
  const author = authorData.name

  const categories = post.categories.map(async (categoryId) => {
    const categoryRequest = await fetch(`https://acygp.com/serios/wp-json/wp/v2/categories/${categoryId}`)
    if (!categoryRequest.ok) {
      throw new Error('Error fetching category data')
    }
    const categoryData = await categoryRequest.json()
    return categoryData.name
  })

  return {
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    date: dateFormatter(post.date),
    imageUrl: featureImage,
    author,
    categories: await Promise.all(categories)
  }
}
