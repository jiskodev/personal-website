import React, {useState} from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Projects } from './components/ProjectBox/data'
import ProjectPage from './components/pages/ProjectPage';
import SideBar from './components/SideBar'
import NavMenu from './components/NavMenu'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { Container } from './components/backgroundContainer'
import ScrollToTop from './components/utils/ScrollToTop'
import Contact from './components/pages/Contact';

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
      <ScrollToTop />
        <Container>
        <SideBar toggle={toggle} open={open} toggleTheme={toggleTheme} isLightMode={isLightMode} />
        <NavMenu toggle={toggle} open={open} toggleTheme={toggleTheme} isLightMode={isLightMode}></NavMenu>
        <Switch>
          <Route exact path='/'>
            <Home projects={Projects} />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route path='/:handle'>
            <ProjectPage toggle={toggle} open={open} projects={Projects} />
          </Route>
        </Switch>
        </Container>
      </ThemeProvider>
    </Router>
      
    </div>
  );
}

export default App;
