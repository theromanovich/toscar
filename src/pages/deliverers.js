import Filter from "@/components/Filter/Filter";
import DelivererCard from "@/components/DelivererCard/DelivererCard";

const deliverers = (props) => {
  console.log(props)
  return (
    <>
        <Filter/>
        <DelivererCard/>
    </>
  )
}

async function getStaticProps(context) {
  const res = await fetch(`http://localhost:1337/api/deliverers-cards?populate=*`)
  const data = await res.json()
  return {
      props: {data}, 
  }
}

export default deliverers