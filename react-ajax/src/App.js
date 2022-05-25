// import React, { useState } from 'react';

// const EXAMPLE_DATA = [
//   { name: "react", html_url: "https://github.com/factbook/react" },
//   { name: "react-bootstrap", html_url: "https://github.com/react-boostrap/react-bootstrap" },
//   { name: "react-router", html_url: "https://github.com/remix-run/react-router" }
// ];


// function App() {
//   const [data, setData] = useState(EXAMPLE_DATA);

//   //control form
//   const [queryInput, setQueryInput] = useState('');

//   const handleChange = (event) => {
//     setQueryInput(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   }

//   const dataElemArray = data.map((repo) => {
//     return <li key={repo.html_url}> <a href={repo.html_url}>{repo.name}</a> </li>
//   });


//   return (

//     <div className="container">
//       <header> <h1> AJAX Demo</h1></header>

//       <form method="Post" action="https://api.github.com/search/repositories">
//         <input type="text" className="form-control mb-2"
//           name="q"
//           placeholder="Search Github for..."
//           value={queryInput} onChange={handleChange}
//         />
//         {/* Example 1*/}
//         <input type="hidden" name="sort" value="stars"/>
//         {/* <input type="hidden" name="sort" value="best_match"/> */}

//         <button type="submit" className="btn btn-primary">Seach!</button>
//       </form>

//       <div className="mt-4">
//         <h2>Results</h2>
//         {/* results go here */}
//         {dataElemArray}

//       </div>
//     </div>
//   );
// }

// export default App;


// //Example 10
// import React, { useState } from 'react';

// const EXAMPLE_DATA = [
//   { name: "react", html_url: "https://github.com/factbook/react" },
//   { name: "react-bootstrap", html_url: "https://github.com/react-boostrap/react-bootstrap" },
//   { name: "react-router", html_url: "https://github.com/remix-run/react-router" }
// ];


// function App() {
//   //Example 10 - set the initial state variable to be empty array
//   const [data, setData] = useState([]);

  
//   const [queryInput, setQueryInput] = useState('');

//   const handleChange = (event) => {
//     setQueryInput(event.target.value);
//   }

//   const handleSubmit = (event) => {

//     // //Example 10- 
//     event.preventDefault();
//     //Example 10 - add the queryInput state variable to the fetch param
//     //note that the setData is using 'data.items', not just 'data'
//     //note that i'm using the queryInput state value too!
//     fetch("https://api.github.com/search/repositories?q=" + queryInput)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log("received: ", data);
//         setData(data.items);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   //rendering the data

//   //Example 10
//   console.log("rendering withdata", data);
//   const dataElemArray = data.map((repo) => {
//     return <li key={repo.html_url}> <a href={repo.html_url}>{repo.full_name}</a> </li>
//   });


//   return (

//     <div className="container">
//       <header> <h1> AJAX Demo</h1></header>
//   {/*Example 10 add the onSubmit to the form  */}
//       <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
//         <input type="text" className="form-control mb-2"
//           name="q"
//           placeholder="Search Github for..."
//           value={queryInput} onChange={handleChange}
//         />
//         <input type="hidden" name="sort" value="best_match" />

//         <button type="submit" className="btn btn-primary">Seach!</button>
//       </form>

// {/* Example 10, conditional rendering if there's no data yet*/}
//       {data.length === 0 && <p>No results yet</p>}
//       {data.length !== 0 &&
//         <div className="mt-4">
//           <h2>Results</h2>

//           {dataElemArray}

//         </div>
//       }
//     </div>
//   );
// }

// export default App;


// // Example 11

// //Example 11 - import the useEffect hook component
// import React, { useState, useEffect } from 'react';

// const EXAMPLE_DATA = [
//   { name: "react", html_url: "https://github.com/factbook/react" },
//   { name: "react-bootstrap", html_url: "https://github.com/react-boostrap/react-bootstrap" },
//   { name: "react-router", html_url: "https://github.com/remix-run/react-router" }
// ];


// function App() {
//   const [data, setData] = useState([]);
//   const [queryInput, setQueryInput] = useState('');

// //Example 11 - put the fetch inside of the useEffect
// useEffect(function() {
//   //what to do when the app first loads
//     fetch("https://api.github.com/search/repositories?q=react")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log("received: ", data);
//       setData(data.items);
//     })
//     .catch((error) => {
//       console.log(error);
//     })

// }, []);

//   const handleChange = (event) => {
//     setQueryInput(event.target.value);
//   }

//   const handleSubmit = (event) => {

    
//     event.preventDefault();
    
//     fetch("https://api.github.com/search/repositories?q=react" + queryInput)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log("received: ", data);
//         setData(data.items);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   //rendering the data

//     console.log("rendering withdata", data);
//   const dataElemArray = data.map((repo) => {
//     return <li key={repo.html_url}> <a href={repo.html_url}>{repo.full_name}</a> </li>
//   });

//   return (
//     <div className="container">
//       <header> <h1> AJAX Demo</h1></header>
//       <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
//         <input type="text" className="form-control mb-2"
//           name="q"
//           placeholder="Search Github for..."
//           value={queryInput} onChange={handleChange}
//         />
//         <input type="hidden" name="sort" value="best_match" />

//         <button type="submit" className="btn btn-primary">Seach!</button>
//       </form>

//       {data.length === 0 && <p>No results yet</p>}
//       {data.length !== 0 &&
//         <div className="mt-4">
//           <h2>Results</h2>
//           {/* results go here */}
//           {dataElemArray}

//         </div>
//       }
//     </div>
//   );
// }

// export default App;


// //Example 12

// //example 12 - second argument array
// import React, { useState, useEffect } from 'react';

// const EXAMPLE_DATA = [
//   { name: "react", html_url: "https://github.com/factbook/react" },
//   { name: "react-bootstrap", html_url: "https://github.com/react-boostrap/react-bootstrap" },
//   { name: "react-router", html_url: "https://github.com/remix-run/react-router" }
// ];


// function App(props) {
//   const [data, setData] = useState([]);
//   const [queryInput, setQueryInput] = useState('');
//   console.log("props : ", props.initialSearch);

// // Example 12 modify to arrow function for coding style
// useEffect(() => {
  
//     fetch("https://api.github.com/search/repositories?q="+props.initialSearch)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log("received: ", data);
//       setData(data.items);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// //Example 12 - if somehow this prop changes
// }, [props.initialSearch]);

//   const handleChange = (event) => {
//     setQueryInput(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     fetch("https://api.github.com/search/repositories?q=react" + queryInput)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log("received: ", data);
//         setData(data.items);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   //rendering the data

//     console.log("rendering withdata", data);
//   const dataElemArray = data.map((repo) => {
//     return <li key={repo.html_url}> <a href={repo.html_url}>{repo.full_name}</a> </li>
//   });


//   return (

//     <div className="container">
//       <header> <h1> AJAX Demo</h1></header>
//       <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
//         <input type="text" className="form-control mb-2"
//           name="q"
//           placeholder="Search Github for..."
//           value={queryInput} onChange={handleChange}
//         />
//         <input type="hidden" name="sort" value="best_match" />

//         <button type="submit" className="btn btn-primary">Seach!</button>
//       </form>

//       {data.length === 0 && <p>No results yet</p>}
//       {data.length !== 0 &&
//         <div className="mt-4">
//           <h2>Results</h2>
//           {/* results go here */}
//           {dataElemArray}

//         </div>
//       }
//     </div>
//   );
// }

// export default App;



//Example 13

//example 13 - Cleanup
import React, { useState, useEffect } from 'react';

const EXAMPLE_DATA = [
  { name: "react", html_url: "https://github.com/factbook/react" },
  { name: "react-bootstrap", html_url: "https://github.com/react-boostrap/react-bootstrap" },
  { name: "react-router", html_url: "https://github.com/remix-run/react-router" }
];


function App(props) {
  const [data, setData] = useState([]);
  const [queryInput, setQueryInput] = useState('');


useEffect(() => {
  //what to do when the app first loads
    // fetch("https://api.github.com/search/repositories?q="+props.initialSearch)
    fetch("/myfile.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("received: ", data);
      setData(data.items);
    })
    .catch((error) => {
      console.log(error);
    })

    function cleanup() {
      console.log("component is being removed")
      console.log("turn off the lights")
    }
    return cleanup;

}, [props.initialSearch]);

  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = (event) => {

    
    event.preventDefault();
    
    fetch("https://api.github.com/search/repositories?q=react" + queryInput)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("received: ", data);
        setData(data.items);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //rendering the data

    console.log("rendering withdata", data);
  const dataElemArray = data.map((repo) => {
    return <li key={repo.html_url}> <a href={repo.html_url}>{repo.full_name}</a> </li>
  });


  return (

    <div className="container">
      <header> <h1> AJAX Demo</h1></header>
      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2"
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="best_match" />

        <button type="submit" className="btn btn-primary">Seach!</button>
      </form>

      {data.length === 0 && <p>No results yet</p>}
      {data.length !== 0 &&
        <div className="mt-4">
          <h2>Results</h2>
          {/* results go here */}
          {dataElemArray}

        </div>
      }
    </div>
  );
}

export default App;

