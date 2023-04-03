import Review from '@/components/Review/Review'
import Link from 'next/link'
import ReviewGoogle from '@/components/Review/ReviewGoogle'
import { useRef, useEffect, useState } from 'react'
const reviewsData = [
  {
    id: 1,
    author: 'Віктор Сергійович',
    rating: 4,
    channel: 'Toyota Allion',
    url: 'https://www.youtube.com/embed/5y39-0U7c-E'
  },
  {
    id: 2,
    author: 'Віктор Сергійович',
    rating: 5,
    channel: 'Toyota Allion',
    url: 'https://www.youtube.com/embed/hsBtTlhgbmU'
  },
  {
    id: 3,
    author: 'Віктор Сергійович',
    rating: 4,
    channel: 'Toyota Allion',
    url: 'https://www.youtube.com/embed/WicY3-uQgLM'
  },
  {
    id: 4,
    author: 'Віктор Сергійович',
    rating: 5,
    channel: 'Toyota Allion',
    url: 'https://www.youtube.com/embed/X8JfzQHgTfs'
  },
  {
    id: 5,
    author: 'Віктор Сергійович',
    rating: 5,
    channel: 'Toyota Allion',
    url: 'https://www.youtube.com/embed/V9JNPeUjkTg'
  },
  {
    id: 6,
    author: 'Віктор Сергійович',
    rating: 5,
    channel: 'Toyota Allion',
    url: 'https://www.youtube.com/embed/N3Sw9rJSldg'
  }
]

const Reviews = () => {
  const [tabState, setTabState] = useState(1)
  const toggleTab = indexTab => {
    setTabState(indexTab)
  }
  return (
    <>
      <div className='review'>
        <div className='review__container'>
          <div className='breadcrumbs'>
            <Link href='/'>Головна</Link>/<Link href='/reviews'>Відгуки</Link>
          </div>
          <div className='review__title'>Відгуки</div>
          <div className='review__tabs'>
            <div
              onClick={() => toggleTab(1)}
              className={
                tabState == 1 ? 'review__tabs-item active' : 'review__tabs-item'
              }
            >
              Відео відгуки
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={
                tabState == 2 ? 'review__tabs-item active' : 'review__tabs-item'
              }
            >
              Відгуки клієнтів
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={
                tabState == 3 ? 'review__tabs-item active' : 'review__tabs-item'
              }
            >
              Про нас говорять
            </div>
          </div>
          {tabState == 1 && (
            <div className='review__videos'>
              {reviewsData.map(review => {
                return <Review {...review} key={review.id} />
              })}
            </div>
          )}
          {tabState == 2 && <ReviewGoogle />}
          {tabState == 3 && (
            <div className='talking'>
              <iframe
                src='https://rayon.in.ua/news/354608-avto-z-ssha-perevagi-i-nedoliki'
                width='350'
                height='350'
                scrolling='auto'
              ></iframe>
              <iframe
                src='https://auto.bigmir.net/ua/autonews/autoworld/6833158-kak-prignat-avto-iz-ssha-v-usloviyakh-voennogo-polozheniya'
                width='350'
                height='350'
                scrolling='auto'
              ></iframe>
              <iframe
                src='https://finance.ua/ua/saving/kak-kupit-avto-iz-ssha'
                width='350'
                height='350'
                scrolling='auto'
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Reviews
