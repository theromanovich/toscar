import { blogData } from "@/components/Blog/blogData";
import BlogSinglePage from "@/components/Blog/BlogSinglePage";
import { useRouter } from "next/router"

const blogId = (props) => {
    const router = useRouter();
    console.log(router.query.singleBlogId);
    return (
        <BlogSinglePage PageIndex={router.query.singleBlogId} data={blogData}/>
    )
}
export default blogId