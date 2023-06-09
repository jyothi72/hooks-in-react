import React,{useContext} from "react";
import Authcontext from "../../state/authcontext";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx=useContext(Authcontext)
  return (
    
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
     
    
  );
};

export default Navigation;
