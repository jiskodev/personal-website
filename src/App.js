import React, {useState} from 'react'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Projects } from './components/ProjectBox/data'
import ProjectPage from './components/pages/ProjectPage';

function App() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  return (
    <div className="App">
    <Router>
      <Route exact path='/'>
        <Home toggle={toggle} open={open} projects={Projects} />
      </Route>

      <Route path='/:handle'>
        <ProjectPage toggle={toggle} open={open} projects={Projects} />
      </Route>
      
    </Router>
      
    </div>
  );
}

export default App;
