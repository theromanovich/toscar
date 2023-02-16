import { blogData } from "@/components/Blog/blogData"
const BlogSinglePage = ({PageIndex, data}) => {
  return (
    <div className="single-blog">

        <div className="single-blog__date">
            {data[PageIndex-1].author}
        </div>

        <div className="single-blog__title">
            <span>{data[PageIndex-1].title}</span>
        </div>

       <div className="single-blog__description">
            {data[PageIndex-1].description}
       </div>
        
       <div className="single-blog__tags">
            {data[PageIndex-1].tags.map(item => {
                return <span className={`tag ${item.toLowerCase()}`}>{item}</span>
            })}
       </div>
     
       <div className="single-blog__image">
            <img src={data[PageIndex-1].img} alt={blogData[PageIndex-1].title} />
       </div>

       <div className="single-blog__text">
            <p>{data[PageIndex-1].text}</p>
       </div>

    </div>
  )
}
export default BlogSinglePage