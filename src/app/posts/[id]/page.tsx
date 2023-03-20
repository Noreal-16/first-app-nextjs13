import Link from "next/link";

const fetchSinglePosts = (id : any) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next:{
            revalidate: 60
        }
    })
        .then(res => res.json());
}
export default async function Post({params}:any){
    const {id} = params;

    const posts = await fetchSinglePosts(id);

    return(
        <article>
            <h1>Esto es un Post {posts.title}</h1>
            <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
        </article>
    )
}