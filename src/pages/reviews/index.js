import Review from '@/components/Review/Review'
import Link from 'next/link'
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

const reviews = () => {
  return (
    <>
      <div className='review'>
        <div className='review__container'>
          <div className='breadcrumbs'>
            <Link href='/'>Головна</Link>/<Link href='/reviews'>Відгуки</Link>
          </div>
          <div className='review__title'>Відгуки</div>
          <div className='review__videos'>
            {reviewsData.map(review => {
              return <Review {...review} key={review.id} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default reviews
