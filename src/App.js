import React from 'react';
import Router  from './router';
import './App.css';
import {BrowserRouter as BRouter} from 'react-router-dom'; 

function App() {
  return (
    <div>
        <BRouter><Router/></BRouter>
    </div>
  );
}

export default App;
