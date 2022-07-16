import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const files = fs.readdirSync(path.join('posts'))

  console.log(files)
  
  const postses = files.map((filename) => {
    const slug = filename.replace('.mdx', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8')

    console.log(markdownWithMeta)

    return {
      slug,
    }
  })


  return {
    props: { posts: data }
  }
}

export default function Blog( { posts } ) {

  return(
    <div>
      <h1>All posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={'/blog/' + post.id} key={post.id}>
            <a>
              <h3>{post.title}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )

}