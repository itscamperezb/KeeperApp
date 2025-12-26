import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Note from "./note";
import Footer from "./footer";
import notes from "./notes";

function createNotes(noteItem) {
  return <Note title={noteItem.title} content={noteItem.content} />;
}

function App() {
  return (
    <div className="container">
      <Header />
      <div className="contentContainer">{notes.map(createNotes)}</div>
      <Footer />
    </div>
  );
}

export default App;
