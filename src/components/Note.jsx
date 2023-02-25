import React from "react";

export const Note = () => {
  return (
    <div className="note-container">
      <div className="note">
        <p className="title">This is Note 1</p>
        <p className="content">Content For Note 1</p>
      </div>
      <div className="note">
        <p className="title">This is Note 2</p>
        <p className="content">Content For Note 2</p>
      </div>
      <div className="note">
        <p className="title">This is Note 3</p>
        <p className="content">Content For Note 3</p>
      </div>
    </div>
  );
};
