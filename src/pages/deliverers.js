import Filter from "@/components/Filter/Filter";
import DelivererCard from "@/components/DelivererCard/DelivererCard";
import { useEffect, useState } from "react";


const deliverers = (props) => {
  const [deliverersArr, setDeliverersArr] = useState([])
  const deliverersData = props.data.data;

  useEffect(() => {
    setDeliverersArr(deliverersData)
    console.log(deliverersArr)
  }, [deliverersData])

  // const deliverersHandler = () => {
  //   setDeliverersArr(deliverersArr.filter(card => {
  //     console.log(card[0])
  //   } ))
  // }

  return (
    <>
        <Filter/>
        {deliverersArr.map(deliverer => {
          const {url} = deliverer.attributes.thumbnail.data[0].attributes;
          const {tags} = deliverer.attributes
          return <DelivererCard {...deliverer.attributes} thumbnail={url} tags={tags.split(', ')}/>
          
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
