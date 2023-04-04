import { Star, NoStar, getStars } from './ReviewStars'
const Review = ({ author, rating, channel, url }) => {
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
