import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App({ arr }) {
  const [notes, setNotes] = useState([])
  useEffect(() => {
  axios
    .get('http://localhost:88/nouns')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
}, [])
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <div>
        {notes.map(e => <p>{e.spanish}: {e.english}</p>)}
      </div>


    </header>
  </div>
);
}

export default App;
