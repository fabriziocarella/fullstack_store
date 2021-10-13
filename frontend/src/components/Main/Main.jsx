// 3rd party components
import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "../Home/Home"
import Details from "../Details/Details"
import Error from "../Error/Error";


const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:game" component={Details} />
        <Route component={Error} />
      </Switch>
    </main>
  )
};

export default Main;
