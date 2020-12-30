import React from 'react'
import About from './About'
import Intro from './Intro'
import ProjectSummary from './ProjectSummary'

function Home({ projects }) {
    return (
        <>
            <Intro />
            <About />
            <ProjectSummary projects={projects} />
        </>
    )
}

export default Home
