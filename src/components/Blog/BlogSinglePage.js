import { blogData } from "@/components/Blog/blogData"
const BlogSinglePage = ({img, title, author, description, tags}) => {
  return (
    <div className="single-blog">

        <div className="single-blog__date">
            {author}
        </div>

        <div className="single-blog__title">
            <span>{title}</span>
        </div>

       <div className="single-blog__description">
            {description}
       </div>
        
       <div className="single-blog__tags">
            {tags.map(item => {
                return <span className={`tag ${item.toLowerCase()}`}>{item}</span>
            })}
       </div>
     
       <div className="single-blog__image">
            <img src={img} alt={title} />
       </div>
{/* 
       <div className="single-blog__text">
            <p>{data[PageIndex-1].text}</p>
       </div> */}

    </div>
  )
}
export default BlogSinglePage