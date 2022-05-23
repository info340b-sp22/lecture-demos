import React, { useState } from 'react';

const EXAMPLE_DATA = [
  { name: "react", html_url: "https://github.com/factbook/react" },
  { name: "react-bootstrap", html_url: "https://github.com/react-boostrap/react-bootstrap" },
  { name: "react-router", html_url: "https://github.com/remix-run/react-router" }
];


function App() {
  const [data, setData] = useState(EXAMPLE_DATA);

  //control form
  const [queryInput, setQueryInput] = useState('');

  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const dataElemArray = data.map((repo) => {
    return <li key={repo.html_url}> <a href={repo.html_url}>{repo.name}</a> </li>
  });


  return (

    <div className="container">
      <header> <h1> AJAX Demo</h1></header>

      <form method="GET" action="https://api.github.com/search/repositories">
        <input type="text" className="form-control mb-2"
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        {/* Example 1*/}
        {/* <input type="hidden" name="sort" value="stars"/> */}
        <input type="hidden" name="sort" value="best_match"/>

        <button type="submit" className="btn btn-primary">Seach!</button>
      </form>

      <div className="mt-4">
        <h2>Results</h2>
        {/* results go here */}
        {dataElemArray}

      </div>
    </div>
  );
}

export default App;
