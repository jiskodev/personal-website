import React from 'react'
import About from '../About'
import Hero from '../Hero'
import Projects from '../Projects'
import TransitionContainer from '../TransitionContainer'

function Home({ projects, toggleTheme }) {
    return (
        <>
            <TransitionContainer />
            <Hero />
            <About />
            <Projects projects={projects} />
            
        </>
    )
}

export default Home
