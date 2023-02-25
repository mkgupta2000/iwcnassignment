import React from "react";
import { DisplayNote } from "./DisplayNote";

export const Note = () => {
  return (
    <div className="note-container">
      <DisplayNote title="This is Note 1" content="Content For Note 1" />
      <DisplayNote title="This is Note 1" content="Content For Note 1" />
      <DisplayNote title="This is Note 1" content="Content For Note 1" />
      <DisplayNote title="This is Note 1" content="Content For Note 1" />
      <DisplayNote title="This is Note 1" content="Content For Note 1" />
      <DisplayNote title="This is Note 1" content="Content For Note 1" />
    </div>
  );
};
