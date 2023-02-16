import BlogSinglePage from "@/components/Blog/BlogSinglePage";
import { useRouter } from "next/router"

const blogId = (props) => {
    const router = useRouter();
    console.log(router.query.singleBlogId);
    return (
        <BlogSinglePage ie={router.query.singleBlogId}/>
    )
}
export default blogId