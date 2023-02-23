import DelivererSinglePage from "@/components/DelivererCard/DelivererSinglePage";

const DelivererSingle = (props) => {
//   const { title, author, description, tags,  } = props.data.attributes;
//   const {url} =  props.data.attributes.img.data.attributes;

  return (
    <DelivererSinglePage/>
  );
};
export default DelivererSingle;

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:1337/api/deliverers-cards?filters[slug][$eq]=${context.params.slug}&populate=*`
  );

  
  console.log(context.params.slug)
  const response = await res.json();

  return {
    props: {
      data: response.data[0],
    }, 
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/deliverers-cards`);
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
