//imports
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

//css
import './App.css';

//components
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//main parent component to render application
function App() {
  //setting state values
  console.log('>>>>>>>>>>hit app route')
  return (
    <div className="App">
      <div className="mainContainer">

        <Navbar />
        <Switch>
          <Route path='/about' component={About} />

        </Switch>
      </div>
      <Footer />
    </div>
  );

}

export default App;