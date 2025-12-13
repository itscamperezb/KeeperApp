import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Note from "./note";
import Footer from "./footer";
function App() {
  return (
    <div className="container">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
