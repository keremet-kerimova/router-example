import classes from "./FullSaide.module.css";
import { Link } from "react-router-dom";

const FullSaide = ({ match }) => {
    return ( 
        <div className={classes.FullSaide}>
            <Link to="/saide">Back to posts</Link>
            <h1>News #{match.params.id}</h1>
        </div>
    );
}
 
export default FullSaide;