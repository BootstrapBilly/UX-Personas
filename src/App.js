import React from 'react';

import classes from "./App.module.css"

import Three from "./Pages/Three/Three"

import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={()=> <Three color_1="#329d9c" color_2="#7be495" />}  />

      </Switch>

    </BrowserRouter>

  );
}

export default App;
