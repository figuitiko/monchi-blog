import React from 'react'

const Blog = async () => {
  const res = await fetch('https://acygp.com/serios/wp-json/wp/v2/posts')
  const data = await res.json()
  console.log(data)
  return (
    <div>page</div>
  )
}

export default Blog