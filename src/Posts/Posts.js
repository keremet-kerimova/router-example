import { Route } from "react-router"
import PostFull from "./PostFull/PostFull"
import PostList from "./PostList/PostList"

const Posts = ({ match }) => {
    return ( 
        <div className="posts">
{match.isExact}
        <PostList/>
        <Route path="/posts/:id" component={PostFull}/>
        </div>
     );
}
export default Posts;