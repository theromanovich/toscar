import {useRouter} from "next/router";
import Link from "next/link";

// import BlogCard from "@/components/BlogCard/BlogCard";

const BlogList = (props) => {
    const router = useRouter()
    console.log(props.data);

    const serviceData = props.data.data;


    console.log(serviceData[0].attributes.name);
    console.log(serviceData[1]);
    console.log(serviceData)
    return <div>

        {serviceData.map(({id, attributes }) => (
            <Link key={id} href={'/blog/' + attributes.slug}> 
            <span>
            {attributes.title}
            </span>
            </Link>
        ))}

    </div>

}
export default BlogList;


export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/api/blogs/`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, // will be passed to the page component as props
    }
}
