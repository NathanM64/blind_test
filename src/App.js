import React from 'react';
import Navigation  from './common/Navigation';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./common/store";

const App = () => {
  return(
    <Provider store={store}>
      <div className="App">
        <Navigation />
      </div>
    </Provider>
  )
};

export default App;