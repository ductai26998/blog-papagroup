import React from "react";
import './App.scss';

import Header from '../header/Header';
import Home from "../pages/Home";

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="app">
        <Header></Header>
        <Home></Home>
      </div>
    );
  }
}

export default App;