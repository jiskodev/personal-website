import React, {useState} from 'react'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Projects } from './components/ProjectBox/data'
import ProjectPage from './components/pages/ProjectPage';
import SideBar from './components/SideBar'
import NavMenu from './components/NavMenu'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { Container } from './components/backgroundContainer'

function App() {
  const stored = localStorage.getItem('isLightMode')
  const [isLightMode, setIsLightMode] = useState(stored === 'true' ? true : false)
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    localStorage.setItem('isLightMode', !isLightMode)
  }

  return (
    <div className="App">
    <Router>
      <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
        <Container>
        <SideBar toggle={toggle} open={open} toggleTheme={toggleTheme} isLightMode={isLightMode} />
        <NavMenu open={open} toggleTheme={toggleTheme} isLightMode={isLightMode}></NavMenu>
        <Route exact path='/'>
          <Home projects={Projects} />
        </Route>

        <Route path='/:handle'>
          <ProjectPage toggle={toggle} open={open} projects={Projects} />
        </Route>
        </Container>
        
      </ThemeProvider>
    </Router>
      
    </div>
  );
}

export default App;
