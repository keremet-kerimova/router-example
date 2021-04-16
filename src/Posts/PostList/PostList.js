import { Link } from "react-router-dom";
import classes from "./PostList.module.css";
import ka from "../PostList/ka.jpg"

const PostList = () => {

    const results = [];
    for (let id = 1; id <=5; id++) {
        results.push(<li>
                         <img className={classes.jpg1}  src = {ka} alt = "ka" width="150px"/>
                        <Link to={"/posts/" + id}>Post number #{id}</Link>
                    </li>)
    }
    return ( 
        <ul className={classes.PostList}>{results}</ul>
    );
}
 
export default PostList