import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    id:'',
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
        id: Date.now().toString()
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      content: ""
    });
    props.togglePopup(false)
    event.preventDefault();

  }

  function cancelNote() {
    props.togglePopup(false)
  }

  return (
    <div className="popup-box">
      <div className="box">
      <form>        
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="1"
        />
        <button onClick={submitNote}>Add</button>
        <button onClick={cancelNote}>Cancel</button>
        
      </form>
      </div>
    </div>
  );
}

export default CreateArea;

