import { carsData } from "./accordionData";

const Cars = ({img, model, price, terms}) => {
 
    return (
        <div className="deliverer__cars-item">
            <img src={img} alt={model} />
        </div>
    )
}
export default Cars