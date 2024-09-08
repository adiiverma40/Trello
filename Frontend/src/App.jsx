import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./Components";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
