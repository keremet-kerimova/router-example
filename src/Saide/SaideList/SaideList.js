import classes from "./SaideList.module.css";
import { Link } from "react-router-dom";

const SaideList = () => {

    const results = [];
    for (let id = 1; id <=3; id++) {
        results.push(<li>
                        <img src="" alt=""/>
                        <Link to={"/saide/" + id}>News number #{id}</Link>
                    </li>)
    }                
    return ( 
        <div className={classes.SaideList}>
            {results}
        </div>
    );
}
 
export default SaideList;