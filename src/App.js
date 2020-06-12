import React from 'react';

import Page from "./Pages/Page/Page"

//external
import { Switch, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

function App() {

  const location = useLocation()

  const routes =

      <Switch location={location} key={location.pathname}>

        <Route path="/" exact component={() =>

          <Page type="1" location={location} />
        }
        />

        <Route path="/two" exact component={() =>

          <Page type="2" location={location} />
        }
        />

        <Route path="/three" exact component={() =>

          <Page type="3" location={location} />
        }
        />

        <Route path="/four" exact component={() =>

          <Page type="4" location={location} />
        }
        />

      </Switch>





  return (

    <AnimatePresence exitBeforeEnter> {/* Display the page transition provider */}

      {[routes] /* Then the routes of the application */}

    </AnimatePresence>

  );
}

export default App;
