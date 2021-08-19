//imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//css
import './App.scss';

//components
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Interview from './components/Interview';


//main parent component to render application
function App() {
  //setting state values
  console.log('>>>>>>>>>>hit app route')
  return (
    <div className="App">

        <Navbar />
      <div className="mainContainer">
        <Switch>
          <Route exact path='/portfolio/' component={ About } />
          <Route path='/portfolio/skills' component={ Skills } />
          <Route path='/portfolio/projects' component={ Projects } />
          <Route path='/portfolio/resume' component={ Resume } />
          <Route path='/portfolio/interview' component={ Interview } />
        </Switch>
      </div>

    </div>
  );

}

export default App;