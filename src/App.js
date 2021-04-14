import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import About from "./About/About"
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import "./App.css"
import Posts from "./Posts/Posts";
import Saide from "./Saide/Saide";
import PostFull from "./Posts/PostFull/PostFull";


function App() {
  const activeLinkStyle = {
    fontWeight: 'bold'
  };

  return (
    <div className="App">
      <ul className="ul">
        <li><NavLink activeStyle={activeLinkStyle}
        activeClassName="activeLink" 
        to="/"
        exact>Home</NavLink>
        </li>
        <li>
          <NavLink
          activeStyle={activeLinkStyle}
          activeClassName="activeLink" 
           to="/contacts">Contacts</NavLink>
           </li>
        <li><NavLink
        activeStyle={activeLinkStyle}
        activeClassName="activeLink" 
         to="/about">About</NavLink></li>
         <li><NavLink
        activeStyle={activeLinkStyle}
        activeClassName="activeLink" 
         to="/posts">Posts</NavLink></li>
          <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/saide"> News</NavLink></li>
      </ul>
      <Switch>
      <Route  path="/about" component={About}/>
      <Route  path="/contacts" component={Contacts}/>
      <Route  path="/posts" component={Posts}/>
      <Route  path="/saide" component={Saide}/>
      <Route   exact path="/" component={Home}/>
      <Route  path="/" component={NotFound}/>
      {/*Главный страницага аллып келет <Redirect to="/" /> */}
      </Switch >
      {/* Перервключает */}
     {/* <About /> */}
    </div>
  );
}

export default App;
