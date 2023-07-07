import React, { useState } from "react";


export default function Todo(props) {
  const { todo, removeTodo, index } = props;
  const [showDelete, setShowDelete] = useState(false);

  return (

    
      <div
        id="input"
        className="d-flex flex-row d-grid gap-2"
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
      >
        
        <p style={{marginBottom:"0px"}}>{todo}</p>

        {showDelete && (
          <p id="deleteIcon" onClick={() => removeTodo(index)}>
            <i className="fa-solid fa-xmark"></i>
          </p>

        )}

      </div>
    
  )
}
