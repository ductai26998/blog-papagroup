import React, { useState, useEffect } from "react";
import './App.scss';
import axios from "axios";

import HaveHeader from "./haveHeader/HaveHeader";
import NoHeader from "./noHeader/NoHeader";

import { useLocation } from "react-router-dom";

function GetCurrentRoute() {
  const location = useLocation();
  return location.pathname
}

// higher-order function to can use Hooks
function App() {
  // get current route to set layout based on route of page
  let currentRoute = GetCurrentRoute();
  let haveHeader = (currentRoute != '/login' && currentRoute != '/register') ? true : false; 
  
  return (
    <div className="app">
      {haveHeader && <HaveHeader></HaveHeader>}
      {!haveHeader && <NoHeader></NoHeader>}
    </div>
  );
}

export default App;