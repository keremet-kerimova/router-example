import classes from "./Home.module.css";
import img from "../Home/karakol.jpg"

const Home = () => {
    return(
        <div className={classes.Home}>
            <h1>Welcome to
Karakol
Your Gateway to Adventure, Culture, and Cuisine</h1>
            <img className={classes.img1}  src = {img} alt = "img" />
        </div>
    )
}
export default Home;