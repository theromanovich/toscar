import { useRouter } from "next/router"

const blogId = () => {
    const router = useRouter();
    console.log(router.query.blogId);
    return (
        <div>[blogId]</div>
    )
}
export default blogId