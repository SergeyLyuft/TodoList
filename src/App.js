import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import DeleteArea from "./components/DeleteArea"
import {useDispatch, useSelector} from "react-redux";
import {request} from "./redux/actions";
import { useSnackbar } from "notistack";

function App() {
  const [notes, setNotes] = useState([]);
  const [isOpenAdd, setOpenAdd] = useState(false)
  const [isOpenDelete, setOpenDelete] = useState(false)
  const [idElement, setIdElement] = useState("")
  const [bg, setBg] = useState(false)
  const dispatch = useDispatch();

  const note = useSelector((state) => state.userReduser);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(
    () =>
      note.forEach((element) => {
        enqueueSnackbar(element);
      }),
    [note, enqueueSnackbar]
  );

  const togglePopup = () => {
    setOpenAdd(!isOpenAdd);
  }

  const togglePopupDelete = () => {
    setOpenDelete(!isOpenDelete);
  }

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote() {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== idElement;
      });
    });
  }

  function handleRequest() {
    dispatch(request())
  }
  
  function changeColor(bg) {
    setBg(!bg)
  }
  
  

  return (
    <div>
      <Header />
      <button onClick={togglePopup} className="note">ADD</button>
      <button onClick={togglePopupDelete} className="note">DELETE</button>
      <button onClick={handleRequest} className="note">GRAPHQL</button>
      {isOpenAdd ? <CreateArea togglePopup={togglePopup} onAdd={addNote} /> : ""}
      {isOpenDelete ? <DeleteArea bg={bg} setBg={setBg} id={idElement} onDelete={deleteNote} togglePopupDelete={togglePopupDelete}/> : ""}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id = {noteItem.id}
            content={noteItem.content}
            onClick={changeColor}

            setId = {setIdElement}     
            setBg={setBg}  
            bg={bg}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
