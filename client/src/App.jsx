import { BrowserRouter } from "react-router-dom";
import Layout from "./components/view/Layout.jsx";
import React, { useState, useRef, Fragment } from "react";
import Modal from "./components/view/Modal.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
