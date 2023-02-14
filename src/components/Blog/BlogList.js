import { blogData } from "./blogData";

const BlogList = () => {
  return (
    <div>
      {blogData.map(blogItem => {
        const {img, author, title, description, tags} = blogItem;
        return <article>
                    <img src={img} alt="" />
               </article>
      })}
    </div>
  )
}
export default BlogList;