import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Result } from "antd";
import Post from "./Post";
import Account from "./Account";
import Register from "./Register";
import Login from "./Login";
import * as serviceWorker from "./serviceWorker";

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/post/:id" children={<Post />} />
      {getCookie("email").length > 0 ? (
        <>
          <Route exact path="/account">
            <Account />
          </Route>
        </>
      ) : (
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
        />
      )}
      <Route exact path="*">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        />{" "}
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
