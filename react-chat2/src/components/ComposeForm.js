import React, { useState } from 'react';

export default function ComposeForm(props) {

  const [textValue, setTextValue] = useState("");

  const handleChange = (event) => {
    const typedValue = event.target.value;
    setTextValue(typedValue);
  } 

const handleSubmit = (event) => {
  event.preventDefault();
  setTextValue('');
  props.whatToDoWhenSubmitted("Monkey", "Monkey", textValue, "general");
  
}

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea className="form-control" rows="2" placeholder="Type a new message" 
              value={textValue}
                onChange={handleChange}
              ></textarea>
        <button className="btn btn-secondary" type="submit">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}