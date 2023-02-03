import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import Footer from "../common/Footer";
import Home from "./Home";
import Details from "./Details";

const Page = ({ cartItems }) => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home cartItems={cartItems} />
          </Route>
          <Route exact path="/cart/:id">
            <Details />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Page;
