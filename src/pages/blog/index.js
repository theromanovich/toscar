import { useRouter } from 'next/router'
import Link from 'next/link'
import BlogSinglePage from '@/components/Blog/BlogSinglePage'
import BlogList from '@/components/Blog/BlogList'

const BlogListPage = props => {
  const router = useRouter()
  console.log(props.data)

  const serviceData = props.data.data

  console.log(serviceData)

  return (
    <div>
      <div className='blog-list__container'>
        <div className='blog-list'>
          {serviceData.map(({ id, attributes }) => (
            <Link key={id} href={'/blog/' + attributes.slug}>
              <BlogList
                id={id}
                title={attributes.title}
                description={attributes.description}
                img={attributes.img.data.attributes.url}
                tags={attributes.tags_blogs.data}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default BlogListPage

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.API_URL}/blogs?populate=*`)
  const data = await res.json()
  return {
    props: { data }
  }
}
