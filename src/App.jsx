import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Note from "./note";
import Footer from "./footer";
import notes from "./notes";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="contentContainer">
        {notes.map((noteItem) => {
          return (
            <Note
              key={noteItem.key}
              title={noteItem.title}
              content={noteItem.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
