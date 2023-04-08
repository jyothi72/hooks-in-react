import React,{useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Authcontext from '../../state/authcontext';
import Button from '../UI/Button/Button';

const Home = (props) => {
  const authctx=useContext(Authcontext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authctx.onLogout}>logout</Button>
    </Card>
  );
};

export default Home;
