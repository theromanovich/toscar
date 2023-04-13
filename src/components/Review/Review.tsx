import { getStars } from '../../utils/utils'

interface ReviewVideo {
  author: string
  rating: number
  channel: string
  url: string
}

const Review = ({ author, rating, channel, url }: ReviewVideo) => {
  const stars = getStars(rating)

  return (
    <div className='review__item'>
      <iframe src={url}></iframe>
      <div className='rating'>{stars}</div>
      <div className='author'>{author}</div>
      <div className='channel'>{channel}</div>
    </div>
  )
}
export default Review
