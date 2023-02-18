import {useRouter} from "next/router";
import Link from "next/link";
import BlogSinglePage from "@/components/Blog/BlogSinglePage";
import BlogList from "@/components/Blog/BlogList";


const BlogListPage = (props) => {
    const router = useRouter()
    console.log(props.data);

    const serviceData = props.data.data;

    console.log(serviceData[0].attributes);
    console.log(serviceData[1]);
    console.log()
    // const tagsArray = serviceData[5].attributes.tags.split(' ')
    // console.log(tagsArray)
    return (
        <div>
            <div className="blog-list__container">
                <div className="blog-list">
                    {serviceData.map(({id, attributes }) => (
                        <Link key={id} href={'/blog/' + attributes.slug}> 
                            <BlogList title={attributes.title} description={attributes.description} img={attributes.img.data.attributes.url} tags={attributes.tags.split(' ')}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BlogListPage;


export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:1337/api/blogs?populate=*`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, 
    }
}
