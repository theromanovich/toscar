import { useState } from 'react'

const ReviewSlider = () => {
  const [currSlide, setCurrSlide] = useState(1)
  const toggleTab = indexTab => {
    setCurrSlide(indexTab)
  }
  return (
    <div className='slider'>
      <div className='slider__container'>
        {currSlide == 1 && (
          <div className='slider__card'>
            <div className='square'></div>
            <div className='content'>
              <div>
                <img
                  src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e'
                  alt=''
                />
              </div>
              <p>
                Ця компанія - найкращий вибір для тих, хто хоче пригнати авто з
                США. Їхня команда експертів знає все про процес і допоможе вам у
                кожному кроці. Я отримав своє авто вчасно і без будь-яких
                проблем!
                <span className='auhor'>Роман Ковальчук</span>
                <button className='left' onClick={() => toggleTab(2)}>
                  {' '}
                  <ChevronRight />
                </button>
                <button className='right' onClick={() => toggleTab(2)}>
                  {' '}
                  <ChevronRight />
                </button>
              </p>
            </div>
          </div>
        )}
        {currSlide == 2 && (
          <div className='slider__card'>
            <div className='square'></div>
            <div className='content'>
              <div>
                <img
                  src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
                  alt=''
                />
              </div>
              <p>
                Я замовляв авто через цей сайт, і був приємно здивований якістю
                обслуговування. Команда професіоналів допомогла мені з усіма
                питаннями, пов'язаними з пригоном авто з США. Рекомендую!
                <span className='auhor'>Василь Гончаренко</span>
                <button className='left' onClick={() => toggleTab(3)}>
                  {' '}
                  <ChevronRight />
                </button>
                <button className='right' onClick={() => toggleTab(3)}>
                  {' '}
                  <ChevronRight />
                </button>
              </p>
            </div>
          </div>
        )}
        {currSlide == 3 && (
          <div className='slider__card'>
            <div className='square'></div>
            <div className='content'>
              <div>
                <img
                  src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                  alt=''
                />
              </div>
              <p>
                Якщо ви хочете пригнати якісне авто з США за вигідною ціною, то
                цей сайт - ваш найкращий вибір. Їхні ціни були найкращими, які я
                знайшов на ринку, а сервіс - на високому рівні. Я точно
                рекомендую їхні послуги!
                <span className='auhor'>Віталій Петренко</span>
                <button className='left' onClick={() => toggleTab(1)}>
                  <ChevronRight />
                </button>
                <button className='right' onClick={() => toggleTab(1)}>
                  {' '}
                  <ChevronRight />
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default ReviewSlider

export const ChevronRight = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 9L12 15L18 9'
        stroke='red'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}
