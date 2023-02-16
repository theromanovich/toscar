import { blogData } from "@/components/Blog/blogData"
const BlogSinglePage = ({ie}) => {
  return (
    <div className="single-blog">

        <div className="single-blog__date">
            {blogData[ie-1].author}
        </div>

        <div className="single-blog__title">
            <span>{blogData[ie-1].title}</span>
        </div>

       <div className="single-blog__description">
            {blogData[ie-1].description}
       </div>
        
       <div className="single-blog__tags">
            {blogData[ie-1].tags.map(item => {
                return <span className={`tag ${item.toLowerCase()}`}>{item}</span>
            })}
       </div>
     
       <div className="single-blog__image">
            <img src={blogData[ie-1].img} alt={blogData[ie-1].title} />
       </div>

       <div className="single-blog__text">
            <p>{blogData[ie-1].text}</p>
       </div>

    </div>
  )
}
export default BlogSinglePage