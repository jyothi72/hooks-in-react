import React,{useContext}from 'react';
import Authcontext from './state/authcontext';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
 const ctx=useContext(Authcontext)
return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App;
