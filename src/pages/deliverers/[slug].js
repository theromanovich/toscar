import DelivererSinglePage from '@/components/DelivererCard/DelivererSinglePage'

const DelivererSingle = props => {
  const { url } = props.data.attributes.thumbnail.data[0].attributes
  const tags = props.data.attributes.tags_deliverers.data
  const paragraphs = props.data.attributes.paragraphs_accordions.data

  console.log(props.data.attributes.cars.data) // CARS

  return (
    <DelivererSinglePage
      {...props.data.attributes}
      thumbnail={url}
      tags={tags}
      paragraphs={paragraphs}
    />
  )
}
export default DelivererSingle

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.API_URL}/deliverers-cards?filters[slug][$eq]=${context.params.slug}&populate=*`
  )
  // &populate=cars.img
  // http://localhost:1337/api/deliverers-cards?populate=cars.img
  const response = await res.json()

  return {
    props: {
      data: response.data[0]
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/deliverers-cards`)
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
