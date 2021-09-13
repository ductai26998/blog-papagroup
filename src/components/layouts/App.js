import React from "react";
import './App.scss';

import Header from '../header/Header';
import Home from "../pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header></Header>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;