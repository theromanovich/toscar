import BlogList from "./BlogList"

import { blogOfTheDay } from "./blogData";

const Blog = () => {
  return (
    <section>
        {blogOfTheDay.map(blog => {
               const {img, author, title, description, tags, id} = blog;
               return (
                <div className="blog" key={id}>
                    <div className="container blog__container">
                        <div className="blog__card">
                            <img src={img} alt={title}/>
                            <div className="blog__card-author">
                                {author}
                            </div>
                            <div className="blog__card-title">
                                {title}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="blog__card-description">
                                {description}
                            </div>
                            <div className="blog__card-tags">
                                {tags.map(item => {
                                    return <span className={`tag ${item.toLowerCase()}`}>{item}</span>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
               )
                    
        })}
        <BlogList />
    </section>
  )
}
export default Blog;