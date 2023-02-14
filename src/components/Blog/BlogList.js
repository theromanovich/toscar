import { blogData } from "./blogData";

const BlogList = () => {
  return (
    <div>
      {blogData.map(blogItem => {
        const {img, author, title, description, tags, id} = blogItem;
        return <article key={id}>
                    <img src={img} alt="" />
               </article>
      })}
    </div>
  )
}
export default BlogList;

