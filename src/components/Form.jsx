import React from "react";

export const Form = () => {
  return (
    <form method="post">
      <input type="text" name="title" placeholder="Enter Title..."></input>
      <textarea
        name="content"
        placeholder="Type Content Here..."
        rows="4"
      ></textarea>
      <button type="submit">submit</button>
    </form>
  );
};
