import { Link } from "react-router-dom"

const PostFull = ({match}) => {
    return(
     <article>
         <Link to="/posts">Back to posts</Link>
     </article>
    );
}
export default PostFull;