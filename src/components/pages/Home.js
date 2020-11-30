import React from 'react'
import About from '../About'
import Hero from '../Hero'
import ProjectBox from '../ProjectBox'

function Home({ projects, toggleTheme }) {
    return (
        <>
            <Hero />
            <About />
            {projects.map(item =>  (
                <ProjectBox {...item} />
            ))}
            
        </>
    )
}

export default Home
