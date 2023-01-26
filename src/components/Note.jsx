import React, { useState } from "react";

function Note(props) {
  const [bg, setBg] = useState(false)

  function chooseNote() {
    setBg(!bg)
    props.setId(props.id)
  }


  return (
    <div style={{backgroundColor: bg ? "grey" : "white"}} id={props.id} onClick={chooseNote} className="note">
      <p>{props.content}</p>
    </div>
  );
}

export default Note;

