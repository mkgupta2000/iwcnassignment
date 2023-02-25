import React, { useState } from "react";

export const Form = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(note);
    props.onCreate(note);
    setNote({ title: "", content: "" });
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Take a note..."
        onChange={handleChange}
        value={note.title}
      ></input>
      <textarea
        name="content"
        placeholder="Type Content Here..."
        onChange={handleChange}
        value={note.content}
        rows="4"
      ></textarea>
      <button type="submit">submit</button>
    </form>
  );
};
