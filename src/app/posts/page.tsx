import { ListOfPost } from "./LisOfPost";



export default function PostsPage({params}: any){
    const {id} = params;
    
    return(
        <section>
        <h1>Welcome to Posts {id}</h1>
        <ListOfPost />
        </section>
    )
}