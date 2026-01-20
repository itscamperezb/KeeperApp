import React, { useState } from "react";
import "./App.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevnote) => {
      return {
        ...prevnote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.addOn(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }
  return (
    <div className="containerTextArea">
      <form className="form">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        ></input>
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
