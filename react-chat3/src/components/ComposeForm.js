
// Example 4
import React, { useState } from 'react';

export default function ComposeForm(props) {

  const [textValue, setTextValue] = useState("");
  
  const currentUser = props.currentUser;
  
  const handleChange = (event) => {
    const typedValue = event.target.value;
    setTextValue(typedValue);
  }

const handleSubmit = (event) => {
  event.preventDefault();

  props.whatToDoWhenSubmitted(currentUser.userId, currentUser.userName, textValue, "general");    

  setTextValue('');
  
}

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
      
      { currentUser.userName && <img src={'img/'+currentUser.userName+'.jpg'} alt={currentUser.userName+ "avatar"}/> }  

        <textarea className="form-control" rows="2" placeholder="Type a new message" 
              value={textValue}
                onChange={handleChange}
                disabled={!currentUser.userName}
              ></textarea>
        <button className="btn btn-secondary" type="submit" disabled={!currentUser.userName}>
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}