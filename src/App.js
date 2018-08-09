import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header, AllAuthors } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/authors" component={AllAuthors} />
      </div>
    );
  }
}

export default App;
