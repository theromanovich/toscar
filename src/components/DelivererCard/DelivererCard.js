import { deliverersData } from "./deliverersData"
const DelivererCard = (props) => {
  return (
    <>
        {deliverersData.map(item => {
            return (
                <div className="deliverer-card">
                    <div className="deliverer-card__container">

                        <div className="deliverer-card__img">
                            <img src={item.thumbnail} alt="" />
                        </div>

                        <div className="deliverer-card__data">

                            <div className="deliverer-card__company">
                                {item.company}
                            </div>

                            <div className="deliverer-card__info">

                                <div className="deliverer-card__details">
                                    <div className="location">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_420_128764)">
                                        <path d="M14 6.66601C14 11.3327 8 15.3327 8 15.3327C8 15.3327 2 11.3327 2 6.66601C2 5.07472 2.63214 3.54859 3.75736 2.42337C4.88258 1.29816 6.4087 0.666016 8 0.666016C9.5913 0.666016 11.1174 1.29816 12.2426 2.42337C13.3679 3.54859 14 5.07472 14 6.66601Z" stroke="#2B2B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 8.66602C9.10457 8.66602 10 7.77059 10 6.66602C10 5.56145 9.10457 4.66602 8 4.66602C6.89543 4.66602 6 5.56145 6 6.66602C6 7.77059 6.89543 8.66602 8 8.66602Z" stroke="#2B2B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_420_128764">
                                        <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        {item.city}
                                    </div>
                                    <div className="divider"></div>
                                    <div className="rating">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_420_128770)">
                                        <path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z" fill="#FFC531" stroke="#FFC531" stroke-width="1.2"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_420_128770">
                                        <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        Рейтинг: {item.rating}
                                    </div>
                                    <div className="divider"></div>
                                    <div className="price">
                                        Ціна: <span>{item.price}</span>
                                    </div>  
                                </div>

                                <div className="deliver-card__status">
                                    {item.status}
                                </div>

                            </div> 

                        </div>

                        <div className="deliverer-card__name">
                            {item.name}
                        </div>

                        <div className="delivere-card__specialization">
                            Спеціалізація: <a href="">{item.specialization}</a>
                        </div>

                        <div className="deliverer-card__description">
                            <p>{item.description}</p>
                        </div>

                        <div className="deliverer-card__tags">
                            {item.tags.map(item => {
                                return <span>{item}</span>
                            })}
                        </div>

                    </div>
                </div>
            )
        })}
    </>
  )
}
export default DelivererCard;