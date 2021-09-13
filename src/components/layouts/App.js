import React from "react";
import './App.scss';

import HaveHeader from "./haveHeader/HaveHeader";
import NoHeader from "./noHeader/NoHeader";

import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const LayoutHaveHeader = HaveHeader(Home);
const LayoutNoHeader = NoHeader(Login, Register)

function GetCurrentRoute() {
  const location = useLocation();
  return location.pathname
}

// higher-order function to can use Hooks
function App() {
  let currentRoute = GetCurrentRoute();
  let haveHeader = (currentRoute != '/login' && currentRoute != '/register') ? true : false; 
  return (
    <div className="app">
      {haveHeader && <LayoutHaveHeader></LayoutHaveHeader>}
      {!haveHeader && <LayoutNoHeader></LayoutNoHeader>}
    </div>
  );
}

export default App;