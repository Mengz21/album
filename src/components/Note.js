import React from "react";

function Note(props) {
  return (
    <div className="note">
       <img alt="random" src={props.imgsrc} />
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
