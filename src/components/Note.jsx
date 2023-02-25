import React from "react";
import { DisplayNote } from "./DisplayNote";

export const Note = () => {
  return (
    <div className="note-container">
      <DisplayNote title="This is the Note 1" content="Content for note 1" />
    </div>
  );
};
