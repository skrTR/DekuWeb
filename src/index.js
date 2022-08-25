// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PageScrollTop from "./components/PageScrollTop";

import Contact from "./screens/Contact";
import News from "./screens/News";
import NewsDetails from "./screens/NewsDetails";
import error404 from "./components/error404";

// Blocks Layout

import Team from "./screens/Team";

import NewsPolicy from "./screens/NewsPolicy";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Brochure from "./screens/Brochure";
import BrochureDetails from "./screens/BrochureDetails";
import HomeScreen from "./screens/HomeScreen";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={HomeScreen}
            />
            {/* Bag  */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/team`}
              component={Team}
            />
            {/* News index */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/news`}
              component={News}
            />
            {/* News delgerengui */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/news-details/:id`}
              component={NewsDetails}
            />
            {/* Товхимол index */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/brochure`}
              component={Brochure}
            />
            {/* Товхимол delgerengui */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/brochure-details/:id`}
              component={BrochureDetails}
            />
            {/* holboo barih */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            {/* Niitleliin bodlog */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/news-policy`}
              component={NewsPolicy}
            />

            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
