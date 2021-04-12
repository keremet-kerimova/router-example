import { Route } from "react-router"
import PostFull from "./PostFull/PostFull"
import PostList from "./PostList/PostList"

const Posts = ({ match}) => {
    return(
        <div>
            { match.isExact}
            ? <PostList />
            : <Route path={`${match.url}:id}>
    )
}
export default Posts;