import { Route } from "react-router";
import FullSaide from "../FullSaide/FullSaide";
import classes from "./FullNews.module.css";
import SaideList from "../SaideList/SaideList";
import Saide from "../SaideList/SaideList";

const Saide = ({ match }) => {
    return ( 
        <div className={classes.Saide}>
            { match.isExact
            ? <SaideList />
            : <Route path="/saide/:id" component={FullSaide} /> }
        </div>
    );
}
 
export default Saide;