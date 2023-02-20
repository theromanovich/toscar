import { deliverersData } from "./deliverersData"
const DelivererCard = (props) => {
  return (
    <>
        {deliverersData.map(item => {
            return <div>{item.name}</div>
        })}
    </>
  )
}
export default DelivererCard;