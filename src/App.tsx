import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/Router/AppRouter";
import { Navbar } from "./components/Router/Navbar";

import "./styles/App.css"

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
