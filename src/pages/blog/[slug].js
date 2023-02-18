const Blog = (props) => {
  const { PostName } = props.data.attributes;
  return (
    <div>
      <h1>{PostName}</h1>
    </div>
  );
};
export default Blog;

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:1337/api/blogs?filters[slug][$eq]=${context.params.slug}`
  );
  const response = await res.json();

  return {
    props: { data: response.data[0] }, 
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/blogs/`);
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

