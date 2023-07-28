import React,{ useState,useEffect } from "react";
import './App.css';

function App() {
  const[quotes,setQuotes]=useState("");
  const getQuote= ()=>{
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json()
    .then((data) =>{
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    }))
  }
// This is a comment
  useEffect(()=>{
    getQuote();
  },[])
  return (
    <div className="App">
      <div className="quote">
        <p>"{quotes.text}"</p>
        <p>Author: {quotes.author}</p>
        <div className="btnContainer">
          <button onClick={getQuote} className="btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
