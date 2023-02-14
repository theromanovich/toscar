import BlogList from "./BlogList"

const Blog = () => {
  return (
    <section>
        <div className="blog">
            <div className="container blog__container">
                <div className="blog__card">
                    <img src="/images/blog-main.png" alt=""/>
                    <div className="blog__card-author">
                        Olivia Rhye • 20 Jan 2022
                    </div>
                    <div className="blog__card-title">
                        UX review presentations
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="blog__card-description" style={{width: '380px', maxWidth: '100%'}}>
                        How do you create compelling presentations that wow your colleagues and impress your managers?
                    </div>
                    <div className="blog__card-tags" style={{display: 'flex'}}>
                        <span className="tag design">Design</span>
                        <span className="tag research">Research</span>
                        <span className="tag presentation">Presentation</span>
                    </div>
                </div>
            </div>
        </div>
        <BlogList />
    </section>
  )
}
export default Blog;