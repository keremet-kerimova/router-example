import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import About from "./About/About"
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import "./App.css"
import Posts from "./Posts/Posts";
import PostFull from "./Posts/PostFull/PostFull"


function App() {
  const activeLinkStyle = {
    fontWeight: 'bold'
  };

  return (
    <div className="App">
      <ul>
        <li><NavLink activeStyle={activeLinkStyle}
        activeClassName="activeLink" 
        to="/"
        exact>Home</NavLink>
        </li>
        <li>
          <NavLink
          activeStyle={activeLinkStyle}
          activeClassName="activeLink" 
           to="/">Contacts</NavLink>
           </li>
        <li><NavLink
        activeStyle={activeLinkStyle}
        activeClassName="activeLink" 
         to="/">About</NavLink></li>
         <li><NavLink
        activeStyle={activeLinkStyle}
        activeClassName="activeLink" 
         to="/posts">Posts</NavLink></li>
      </ul>
      <Switch>
      <Route  path="/about" component={About}/>
      <Route  path="/contacts" component={Contacts}/>
      <Route  path="/posts" component={Posts}/>
      <Route   exact path="/" component={Home}/>
      <Route  path="/" component={NotFound}/>
      {/*Главный страницага аллып келет <Redirect to="/" /> */}
      </Switch>
      
     {/* <About /> */}
    </div>
  );
}

export default App;
