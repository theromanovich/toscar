import { carsData } from "./accordionData";

const Cars = ({img, model, price, terms}) => {
 
    return (
        <div className="deliverer__cars-item">
            <div className="car">
                <img src={img} alt={model} />
                <span>{model}</span>
                <div className="details">
                    <div className="price">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_517_128766)">
                            <path d="M7 0.583008V13.4163" stroke="#8A8A89" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.91667 2.91699H5.54167C5.00018 2.91699 4.48088 3.1321 4.09799 3.51498C3.7151 3.89787 3.5 4.41718 3.5 4.95866C3.5 5.50014 3.7151 6.01945 4.09799 6.40233C4.48088 6.78522 5.00018 7.00033 5.54167 7.00033H8.45833C8.99982 7.00033 9.51912 7.21543 9.90201 7.59832C10.2849 7.9812 10.5 8.50051 10.5 9.04199C10.5 9.58348 10.2849 10.1028 9.90201 10.4857C9.51912 10.8686 8.99982 11.0837 8.45833 11.0837H3.5" stroke="#8A8A89" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_517_128766">
                            <rect width="14" height="14" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        {price}
                    </div>
                    <div className="terms">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_517_128771)">
                            <path d="M7.00033 12.8337C10.222 12.8337 12.8337 10.222 12.8337 7.00033C12.8337 3.77866 10.222 1.16699 7.00033 1.16699C3.77866 1.16699 1.16699 3.77866 1.16699 7.00033C1.16699 10.222 3.77866 12.8337 7.00033 12.8337Z" stroke="#8A8A89" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 3.5V7L9.33333 8.16667" stroke="#8A8A89" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_517_128771">
                            <rect width="14" height="14" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        {terms}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cars