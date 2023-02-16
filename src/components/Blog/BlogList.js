import { useRouter } from "next/router";
import Link from "next/link";
const BlogList = ({id, title, img, author, description, tags}) => {

  return (
        <article className="blog-list-item" key={id}>
            <Link href={id}>
                <img src={img} alt={title}/>
                <div className="blog-list__author">
                  {author}
                </div>
                <div className="blog-list__title">
                  {title}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div className="blog-list__description" style={{width: '384px', maxWidth: '100%'}}>
                  {description}
                </div>
                <div className="blog-list__tags">
                  {tags.map(item => {
                    return <span className={`tag ${item.toLowerCase()}`}>{item}</span>
                  })}
                </div>
              </Link>
          </article>
  )
}
export default BlogList;

