import { LikeButton } from "./likeButton";

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());
}
export async function ListOfPost() {
    const posts = await fetchPosts();
    return posts.slice(0, 5).map((post: any) => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id}/>
        </article>
    ))
}