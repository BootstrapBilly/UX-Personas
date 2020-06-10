import React from 'react';

import Page from "./Pages/Page/Page"

import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={() =>

          <Page type="student"/>
        }
        />

      </Switch>

    </BrowserRouter>

  );
}

export default App;
