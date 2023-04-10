import Review from '../../components/Review/Review'
import Link from 'next/link'
import ReviewGoogle from '../../components/Review/ReviewGoogle'
import reviewsData from './reviewsData'
import { useState } from 'react'

const Reviews = () => {
  const [reviewTabState, setReviewTabState] = useState<number>(1)

  const toggleTab = (indexTab: number) => {
    setReviewTabState(indexTab)
  }

  const reviewVideos = reviewsData.map(review => {
    return <Review {...review} key={review.id} />
  })

  return (
    <>
      <div className='review'>
        <div className='review__container'>
          <div className='breadcrumbs'>
            <Link href='/'>Головна</Link> / <Link href='/reviews'>Відгуки</Link>
          </div>
          <div className='review__title'>Відгуки</div>
          <div className='review__tabs'>
            <div
              onClick={() => toggleTab(1)}
              className={
                reviewTabState == 1
                  ? 'review__tabs-item active'
                  : 'review__tabs-item'
              }
            >
              Відео відгуки
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={
                reviewTabState == 2
                  ? 'review__tabs-item active'
                  : 'review__tabs-item'
              }
            >
              Відгуки клієнтів
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={
                reviewTabState == 3
                  ? 'review__tabs-item active'
                  : 'review__tabs-item'
              }
            >
              Про нас говорять
            </div>
          </div>
          {reviewTabState == 1 && (
            <div className='review__videos'>{reviewVideos}</div>
          )}
          {reviewTabState == 2 && <ReviewGoogle />}
          {reviewTabState == 3 && (
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
