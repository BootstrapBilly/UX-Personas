import React from 'react';

import Page from "./Pages/Page/Page"

import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>

      <Switch>

        <Route path="/" exact component={() =>

          <Page type="1"/>
        }
        />

        <Route path="/two" exact component={() =>

          <Page type="2"/>
        }
        />

        <Route path="/three" exact component={() =>

          <Page type="3"/>
        }
        />

      </Switch>

    </BrowserRouter>

  );
}

export default App;
