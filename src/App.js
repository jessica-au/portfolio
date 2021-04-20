//imports
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

//css
import './App.scss';

//components
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';


//main parent component to render application
function App() {
  //setting state values
  console.log('>>>>>>>>>>hit app route')
  return (
    <div className="App">

        <Navbar />
      <div className="mainContainer">

        <Switch>
          <Route path='/about' component={ About } />
          <Route path='/projects' component={ Projects } />
          <Route path='/resume' component={ Resume } />
        </Switch>
      </div>

    </div>
  );

}

export default App;