import Filter from "@/components/Filter/Filter";
import DelivererCard from "@/components/DelivererCard/DelivererCard";
import Link from "next/link";
import { useEffect } from "react";
import { useFilterContext } from "@/helpers/filter-context/filter-context";

const deliverers = (props) => {
  const {deliverersArr, setDeliverersArr} = useFilterContext()
  const deliverersData = props.data.data;

  useEffect(() => {
    setDeliverersArr(deliverersData)
    console.log(deliverersArr)
  }, [deliverersData])


  return (
    <>
        <Filter/>
          {deliverersArr.map((deliverer, index) => {
            const {url} = deliverer.attributes.thumbnail.data[0].attributes;
            const {tags} = deliverer.attributes
            return (
              <Link key={index} href={'/deliverers/' + deliverer.attributes.slug}>
                <DelivererCard {...deliverer.attributes} thumbnail={url} tags={tags.split(', ')}/>
              </Link>
            ) 
            
          })}
    </>
  )
}
export default deliverers


export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/api/deliverers-cards?populate=*`)
    const data = await res.json()
    return {
        props: {data}, 
    }
}
