function Blog({posts}){}

export async function getStaticProps(){
    const res =  await fetch('http://localhost:3100/data')
    const posts = await res.json()
    console.log(posts)
    // return { props: { posts}}
    return <div>posts</div>
}

export default Blog