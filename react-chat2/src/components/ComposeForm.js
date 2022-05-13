
// export default function ComposeForm(props) {

//     return (
//       <form className="my-2" >
//         <div className="input-group">
//           <textarea className="form-control" rows="2" placeholder="Type a new message" ></textarea>
//           <button className="btn btn-secondary" type="submit">
//             <span className="material-icons">send</span>
//           </button>
//         </div>
//       </form>
//     );
//   }

// // Example 5
// import React, { useState } from 'react';

// export default function ComposeForm(props) {

//   const [textValue, setTextValue] = useState("");

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     const typedValue = event.target.value;
//     setTextValue(typedValue);
//   }

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("submitting form with", textValue);
//   setTextValue('');

//   //Never use document.querySelector in react
// }

//   return (
//     <form className="my-2" onSubmit={handleSubmit}>
//       <div className="input-group">
//         <textarea className="form-control" rows="2" placeholder="Type a new message" 
//               value={textValue}
//                 onChange={handleChange}
//               ></textarea>
//         <button className="btn btn-secondary" type="submit">
//           <span className="material-icons">send</span>
//         </button>
//       </div>
//     </form>
//   );

// }

// Example 6
import React, { useState } from 'react';

export default function ComposeForm(props) {

  const [textValue, setTextValue] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.value);
    const typedValue = event.target.value;
    setTextValue(typedValue);
  }

const handleSubmit = (event) => {
  event.preventDefault();
  // console.log("submitting form with", textValue);
  setTextValue('');

  //Never use document.querySelector in react

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