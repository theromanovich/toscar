import ReviewSlider from './ReviewSlider'

const ReviewGoogle = () => {
  return (
    <div className='google-review'>
      {/* {reviewGoogle.map(rev => {
        return (
          <img
            key={rev.id}
            style={{ width: '350px', height: '150px' }}
            src={rev.url}
            alt=''
          />
        )
      })} */}
      <ReviewSlider />
    </div>
  )
}
export default ReviewGoogle

const reviewGoogle = [
  {
    id: 1,
    url: '/images/reviews/1.png'
  },
  {
    id: 2,
    url: '/images/reviews/2.png'
  },
  {
    id: 3,
    url: '/images/reviews/3.png'
  },
  {
    id: 4,
    url: '/images/reviews/4.png'
  },
  {
    id: 5,
    url: '/images/reviews/5.png'
  },
  {
    id: 6,
    url: '/images/reviews/6.png'
  },
  {
    id: 7,
    url: '/images/reviews/4.png'
  },
  {
    id: 8,
    url: '/images/reviews/5.png'
  },
  {
    id: 9,
    url: '/images/reviews/6.png'
  }
]
