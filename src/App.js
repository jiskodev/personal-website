import React, {useState} from 'react'
import Home from './components/pages/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  return (
    <div className="App">
    <Router>
      <Home toggle={toggle} open={open} />
    </Router>
      
    </div>
  );
}

export default App;
