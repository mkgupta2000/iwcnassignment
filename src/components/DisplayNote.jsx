import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const currDate = new Date().toLocaleString();
export const DisplayNote = (props) => {
  const handleClick = (id) => {
    props.getId(id);
  };
  return (
    <div className="note">
      <div>
        <p className="title">{props.title}</p>
        <p className="content">{props.content}</p>
        <p className="date-time">{currDate}</p>
      </div>

      <button className="dlt-btn" onClick={() => handleClick(props.id)}>
        <DeleteIcon color="action" />
      </button>
      <div></div>
    </div>
  );
};
