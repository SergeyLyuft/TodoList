import React from "react";

function DeleteArea(props) {  
    function submitDelete(e) {
        props.onDelete(props.id);
        e.preventDefault();
        props.togglePopupDelete(false)
        props.setBg(!props.bg)
    }

    function cancelDelete() {
        props.togglePopupDelete(false)
    }

    return (
        <div className="popup-box">
        <div className="box">
        <form>        
            <h1>Delete Note???</h1>
            <button onClick={submitDelete}>YES</button>
            <button onClick={cancelDelete}>NO</button>        
        </form>
        </div>
        </div>
    );
}

export default DeleteArea;

