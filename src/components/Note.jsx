import React from "react";
import { DisplayNote } from "./DisplayNote";
import { Form } from "./Form";
import { useState } from "react";

export const Note = () => {
  const [notes, setNotes] = useState([]);
  const createNote = (note) => {
    console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  return (
    <div className="container">
      <Form onCreate={createNote} />
      <div className="note-container">
        {notes && notes.map}
        <DisplayNote title="This is Note 1" content="Content For Note 1" />
      </div>
    </div>
  );
};
