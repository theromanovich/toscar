import BlogSinglePage from "@/components/Blog/BlogSinglePage";
import { findDOMNode } from "react-dom";


const BlogSingle = (props) => {
  const { title, author, description, tags,  } = props.data.attributes;
  const {url} =  props.data.attributes.img.data.attributes;
  console.log(props.data.attributes.img.data.attributes.url)
  console.log(props.data.attributes)
  return (
    <BlogSinglePage title={title} author={author} img={url} description={description} tags={tags.split(', ')}/>
  );
};
export default BlogSingle;

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:1337/api/blogs?filters[slug][$eq]=${context.params.slug}&populate=*`
  );

  
  console.log(context.params.slug)
  const response = await res.json();
 // http://localhost:1337/api/blogs/${context.params.slug}?populate=*

  return {
    props: {
      data: response.data[0],
    }, 
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/blogs`);
  const data = await res.json();

  return {
    paths: data.data.map(({ attributes }) => ({
      params: {
        slug: attributes.slug,
      },
    })),
    fallback: false, 
  };
}
