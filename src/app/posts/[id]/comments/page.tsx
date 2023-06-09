import Link from "next/link";

const fetchComments = (id : any) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        next:{
            revalidate: 60
        }
    })
        .then(res => res.json());
}
export default async function Post({params}:any){
    const {id} = params;

    const comments = await fetchComments(id);

    return(
        <ul>
            {comments.map((comment: any)=>(
                <li key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}