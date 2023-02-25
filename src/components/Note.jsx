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
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="container">
      <Form onCreate={createNote} />
      <div className="note-container">
        {notes &&
          notes.map((note, index) => (
            <DisplayNote
              title={note.title}
              content={note.content}
              id={index}
              getId={deleteNote}
            />
          ))}
      </div>
    </div>
  );
};
