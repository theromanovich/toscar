import BlogSinglePage from '@/components/Blog/BlogSinglePage'
import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'

const BlogSingle = props => {
  const { title, author, description, tags_blogs, article } =
    props.data.attributes
  const { url } = props.data.attributes.img.data.attributes
  console.log(props)
  return (
    <>
      <BlogSinglePage
        title={title}
        author={author}
        img={url}
        description={description}
        tags={tags_blogs.data}
        article={article}
      />

      <div className='markdown__container'>
        <ReactMarkdown children={article} />
      </div>
    </>
  )
}
export default BlogSingle

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.API_URL}/blogs?filters[slug][$eq]=${context.params.slug}&populate=*`
  )

  console.log(context.params.slug)
  const response = await res.json()
  // ${process.env.API_URL}/blogs/${context.params.slug}?populate=*

  return {
    props: {
      data: response.data[0]
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/blogs`)
  const data = await res.json()

  return {
    paths: data.data.map(({ attributes }) => ({
      params: {
        slug: attributes.slug
      }
    })),
    fallback: false
  }
}
