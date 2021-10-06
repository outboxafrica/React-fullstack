import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Admin from "./Page/Admin";
import ProductDetails from "./Page/ProductDetails";
import Error from "./Page/Error";

import Nav from "./Componets/Nav";
import Footer from "./Componets/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <Home/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />

          <Route path="/productdetails/:id" component={ProductDetails} />
          <Route component={Error} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
