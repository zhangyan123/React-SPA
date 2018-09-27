/**
 * Created by Allan on 2017/09/13.
 */
import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./app/containers/index";
import HomePage from "./app/containers/homePage/index.tsx";
import SubPage from "./app/containers/subPage/index.jsx";
import Demo from "./app/containers/demo/index.jsx";
import Animation from "./app/containers/Animation/index.jsx";
import Login from "./app/containers/login/index.jsx";
import NotFoundPage from "./app/components/NotFoundPage/index";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Demo} />
    <Route path="/subPage" component={SubPage} />
    <Route path="/login" component={Login} />
    <Route path="/animation" component={Animation} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
