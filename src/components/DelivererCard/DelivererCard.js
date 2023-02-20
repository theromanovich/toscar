import { deliverersData } from "./deliverersData"
const DelivererCard = (props) => {
  return (
    <>
        {deliverersData.map(card => {
            const { thumbnail, company, premium, city, rating, price, status, name, specialization, description, tags} = card;
            return (
                <div className="deliverer-card">
                    <div className="deliverer-card__container">

                        <div className="deliverer-card__img">
                            <img src={thumbnail} alt="" />
                            {premium && 
                            <svg className="premium" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4093 0.454586L16.3927 1.89555C16.7529 1.99971 17.1351 2.00051 17.4958 1.89784L22.6276 0.43701C23.5256 0.181385 24.481 0.5811 24.9294 1.40004L27.5925 6.26347C27.7711 6.58977 28.0373 6.85977 28.361 7.04313L32.5961 9.44213C33.4154 9.90619 33.8 10.8788 33.5197 11.7777L32.0526 16.4826C31.9324 16.8683 31.9317 17.2814 32.0508 17.6674L33.5325 22.4712C33.8063 23.359 33.4328 24.3184 32.6307 24.7873L27.9098 27.547C27.5877 27.7354 27.3246 28.01 27.1504 28.34L24.9049 32.5941C24.4704 33.4172 23.5256 33.8318 22.6258 33.5943L17.4584 32.2303C17.1212 32.1413 16.7667 32.142 16.43 32.2323L11.4206 33.5755C10.4999 33.8223 9.53288 33.3851 9.1101 32.5307L6.87213 28.0083C6.68428 27.6287 6.38076 27.3185 6.00532 27.1225L1.43198 24.7345C0.596566 24.2983 0.179039 23.3381 0.429761 22.4296L1.76343 17.5971C1.85784 17.255 1.85953 16.894 1.76833 16.551L0.400176 11.406C0.164851 10.521 0.560595 9.58929 1.36085 9.14419L6.05912 6.53098C6.4009 6.34088 6.67944 6.05475 6.86029 5.70799L9.08042 1.45103C9.52064 0.606959 10.4948 0.190151 11.4093 0.454586Z" fill="#3470FF"/>
                            <path d="M24 13L14.375 22L10 17.9091" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            }
                        </div>

                        <div>

                            <div className="deliverer-card__data">

                                <div className="deliverer-card__company">
                                    {company}
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
                                            {city}
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
                                            Рейтинг: {rating}
                                        </div>
                                        <div className="divider"></div>
                                        <div className="price">
                                            Ціна: <span>{price}</span>
                                        </div>  
                                    </div>

                                    <div className={`deliverer-card__status ${status === "Вільний" ? 'green' : 'red'}`}>
                                        {status}
                                    </div>

                                </div> 

                            </div>

                            <div className="deliverer-card__name">
                                {name}
                            </div>

                            <div className="deliverer-card__specialization">
                                Спеціалізація: <a href="">{specialization}</a>
                            </div>

                            <div className="deliverer-card__description">
                                <p>{description}</p>
                            </div>

                            <div className="deliverer-card__tags">
                                {tags.map(tag => {
                                    return <span>{tag}</span>
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            )
        })}
    </>
  )
}
export default DelivererCard;