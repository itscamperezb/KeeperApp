import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { use } from "react";

function CreateArea(props) {
  const [isExpanded, setExpand] = useState(false);

  function expand() {
    return setExpand(true);
  }

  function rowsNum() {}

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <Box
        className="create-note"
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        {isExpanded ? (
          <TextField
            id="standard-basic"
            variant="standard"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <TextField
          id="standard-multiline-static"
          rows={isExpanded ? 3 : 1}
          onClick={expand}
          defaultValue="Default Value"
          variant="standard"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        />
        <Zoom in={true}>
          <Fab onClick={submitNote} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </Box>
    </div>
  );
}

export default CreateArea;
