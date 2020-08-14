import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = ({ text, desc }) => (
  <div className="container">
    <h1>{text}</h1>
    <h1>{desc}</h1>
  </div>
);

ReactDOM.render(<App text="Hellooooo" desc="I am fine" />, document.getElementById('root'));
