import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/Router/AppRouter";
import { Navbar } from "./components/Router/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./styles/App.css"

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Navbar />
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
    </BrowserRouter>
  );
}

export default App;
