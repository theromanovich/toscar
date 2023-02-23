const DelivererSinglePage = ({thumbnail, company, name, specialization, description, city, rating, price, status, tags, premium}) => {
  const elements = tags.map(tag => {
      return <span>{tag}</span>
  })
  return (
    <div className="deliverer">

        <div className="deliverer__sidebar">

          <div className="deliverer__sidebar-profile">

            <div className={`deliverer__sidebar-status ${status === "Вільний" ? 'green' : 'red'}`}>
                  {status}
              </div>

              <div className="deliverer__sidebar-image">
                <img src={thumbnail} alt={name} />
                    {premium && 
                    <svg className="premium" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4093 0.454586L16.3927 1.89555C16.7529 1.99971 17.1351 2.00051 17.4958 1.89784L22.6276 0.43701C23.5256 0.181385 24.481 0.5811 24.9294 1.40004L27.5925 6.26347C27.7711 6.58977 28.0373 6.85977 28.361 7.04313L32.5961 9.44213C33.4154 9.90619 33.8 10.8788 33.5197 11.7777L32.0526 16.4826C31.9324 16.8683 31.9317 17.2814 32.0508 17.6674L33.5325 22.4712C33.8063 23.359 33.4328 24.3184 32.6307 24.7873L27.9098 27.547C27.5877 27.7354 27.3246 28.01 27.1504 28.34L24.9049 32.5941C24.4704 33.4172 23.5256 33.8318 22.6258 33.5943L17.4584 32.2303C17.1212 32.1413 16.7667 32.142 16.43 32.2323L11.4206 33.5755C10.4999 33.8223 9.53288 33.3851 9.1101 32.5307L6.87213 28.0083C6.68428 27.6287 6.38076 27.3185 6.00532 27.1225L1.43198 24.7345C0.596566 24.2983 0.179039 23.3381 0.429761 22.4296L1.76343 17.5971C1.85784 17.255 1.85953 16.894 1.76833 16.551L0.400176 11.406C0.164851 10.521 0.560595 9.58929 1.36085 9.14419L6.05912 6.53098C6.4009 6.34088 6.67944 6.05475 6.86029 5.70799L9.08042 1.45103C9.52064 0.606959 10.4948 0.190151 11.4093 0.454586Z" fill="#3470FF"/>
                    <path d="M24 13L14.375 22L10 17.9091" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    }
                </div>

                <div className="deliverer__sidebar-name">
                    {name}
                </div>
                
                <div className="deliverer__sidebar-specialization">
                   <p>Cпеціалізація: <span>{specialization}</span></p> 
                </div>

                <div className="deliverer__sidebar-description">
                    {description}
                </div>

          </div>

          <div className="deliverer__sidebar-info">
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
                  Рейтинг: <span>{rating}</span>
              </div>
              <div className="divider"></div>
              <div className="price">
                  Ціна: <span>{price}</span>
              </div>
          </div>

          <div className="deliverer__sidebar-mastery">
              <div className="experience">
                <h3>Досвід</h3>
                <p>Досвід: <span>5 років</span></p>
                <p> Заходив: <span>25 хвилин тому</span></p>
              </div>
              <div className="divider"></div>
              <div className="vocation">
                  <span>Автовоз</span>
                  <span>Авто з США</span>
                  <span>Авто з Європи</span>
                  <span>Авто з Нідерландів</span>
                  <span>Авто з Чехії</span>
                  <span>Авто з Франції</span>
              </div>
              <div className="divider"></div>
              <div className="skills">
                {elements}
              </div>
          </div>

        </div>

        <div className="deliverer__benefits">
            <span>Ми пропонуємо</span>
            <div className="propositions">
              <div className="propositions__item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_517_128820)">
                  <path d="M20.1663 10.1567V11C20.1652 12.9767 19.5251 14.9001 18.3416 16.4833C17.158 18.0666 15.4944 19.2248 13.5988 19.7852C11.7032 20.3457 9.67716 20.2784 7.82294 19.5934C5.96872 18.9083 4.38561 17.6423 3.30972 15.984C2.23384 14.3257 1.72282 12.3641 1.85288 10.3916C1.98294 8.41919 2.74711 6.54164 4.03143 5.03899C5.31575 3.53634 7.05139 2.48911 8.97951 2.05348C10.9076 1.61784 12.9249 1.81715 14.7305 2.62168" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.1667 3.66667L11 12.8425L8.25 10.0925" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_517_128820">
                  <rect width="22" height="22" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                Підбір авто
              </div>
              <div className="propositions__item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_517_128820)">
                  <path d="M20.1663 10.1567V11C20.1652 12.9767 19.5251 14.9001 18.3416 16.4833C17.158 18.0666 15.4944 19.2248 13.5988 19.7852C11.7032 20.3457 9.67716 20.2784 7.82294 19.5934C5.96872 18.9083 4.38561 17.6423 3.30972 15.984C2.23384 14.3257 1.72282 12.3641 1.85288 10.3916C1.98294 8.41919 2.74711 6.54164 4.03143 5.03899C5.31575 3.53634 7.05139 2.48911 8.97951 2.05348C10.9076 1.61784 12.9249 1.81715 14.7305 2.62168" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.1667 3.66667L11 12.8425L8.25 10.0925" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_517_128820">
                  <rect width="22" height="22" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                Розрахунок всіх витрат
              </div>
              <div className="propositions__item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_517_128820)">
                  <path d="M20.1663 10.1567V11C20.1652 12.9767 19.5251 14.9001 18.3416 16.4833C17.158 18.0666 15.4944 19.2248 13.5988 19.7852C11.7032 20.3457 9.67716 20.2784 7.82294 19.5934C5.96872 18.9083 4.38561 17.6423 3.30972 15.984C2.23384 14.3257 1.72282 12.3641 1.85288 10.3916C1.98294 8.41919 2.74711 6.54164 4.03143 5.03899C5.31575 3.53634 7.05139 2.48911 8.97951 2.05348C10.9076 1.61784 12.9249 1.81715 14.7305 2.62168" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.1667 3.66667L11 12.8425L8.25 10.0925" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_517_128820">
                  <rect width="22" height="22" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                Перевірка історії авто
              </div>
              <div className="propositions__item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_517_128820)">
                  <path d="M20.1663 10.1567V11C20.1652 12.9767 19.5251 14.9001 18.3416 16.4833C17.158 18.0666 15.4944 19.2248 13.5988 19.7852C11.7032 20.3457 9.67716 20.2784 7.82294 19.5934C5.96872 18.9083 4.38561 17.6423 3.30972 15.984C2.23384 14.3257 1.72282 12.3641 1.85288 10.3916C1.98294 8.41919 2.74711 6.54164 4.03143 5.03899C5.31575 3.53634 7.05139 2.48911 8.97951 2.05348C10.9076 1.61784 12.9249 1.81715 14.7305 2.62168" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.1667 3.66667L11 12.8425L8.25 10.0925" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_517_128820">
                  <rect width="22" height="22" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                Участь в акціоні
              </div>
              <div className="propositions__item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_517_128820)">
                  <path d="M20.1663 10.1567V11C20.1652 12.9767 19.5251 14.9001 18.3416 16.4833C17.158 18.0666 15.4944 19.2248 13.5988 19.7852C11.7032 20.3457 9.67716 20.2784 7.82294 19.5934C5.96872 18.9083 4.38561 17.6423 3.30972 15.984C2.23384 14.3257 1.72282 12.3641 1.85288 10.3916C1.98294 8.41919 2.74711 6.54164 4.03143 5.03899C5.31575 3.53634 7.05139 2.48911 8.97951 2.05348C10.9076 1.61784 12.9249 1.81715 14.7305 2.62168" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.1667 3.66667L11 12.8425L8.25 10.0925" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_517_128820">
                  <rect width="22" height="22" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                Оплата автомобіля, доставки
              </div>
              <div className="propositions__item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_517_128820)">
                  <path d="M20.1663 10.1567V11C20.1652 12.9767 19.5251 14.9001 18.3416 16.4833C17.158 18.0666 15.4944 19.2248 13.5988 19.7852C11.7032 20.3457 9.67716 20.2784 7.82294 19.5934C5.96872 18.9083 4.38561 17.6423 3.30972 15.984C2.23384 14.3257 1.72282 12.3641 1.85288 10.3916C1.98294 8.41919 2.74711 6.54164 4.03143 5.03899C5.31575 3.53634 7.05139 2.48911 8.97951 2.05348C10.9076 1.61784 12.9249 1.81715 14.7305 2.62168" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.1667 3.66667L11 12.8425L8.25 10.0925" stroke="#3470FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_517_128820">
                  <rect width="22" height="22" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                Доставка в Україну
              </div>
            </div>
        </div>


    </div>
  )
}
export default DelivererSinglePage


