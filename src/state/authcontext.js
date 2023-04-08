import React, { useState,useEffect } from "react";
const Authcontext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});
export const Authcontextprovider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storeinlocalget = localStorage.getItem("loggedin");
    if (storeinlocalget === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = () => {
    localStorage.setItem("loggedin", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedin");
    setIsLoggedIn(false);
  };

  return (
    <Authcontext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </Authcontext.Provider>
  );
};
export default Authcontext;
