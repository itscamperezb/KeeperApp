import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Note from "./note";
import Footer from "./footer";
import notes from "./notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevnotes) => {
      return [...prevnotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevnotes) => {
      return prevnotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <Header />
      <CreateArea addOn={addNote} />
      <div className="contentContainer">
        {notes.map((noteItem, index) => {
          return (
            <Note
              id={index}
              key={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
