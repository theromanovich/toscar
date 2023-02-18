import BlogSinglePage from "@/components/Blog/BlogSinglePage";

const BlogSinle = (props) => {
  const { title, author, description, tags } = props.data.attributes;

  return (
    <BlogSinglePage title={title} author={author}  description={description} tags={tags.split(' ')}/>
  );
};
export default BlogSinle;

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:1337/api/blogs?filters[slug][$eq]=${context.params.slug}`
  );
  console.log(context.params.slug)
  const response = await res.json();
  
  return {
    props: { data: response.data[0] }, 
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/blogs?populate=*`);
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
