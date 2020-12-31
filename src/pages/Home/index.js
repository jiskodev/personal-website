import React from 'react'
import About from './About'
import Intro from './Intro'
import ProjectSummary from './ProjectSummary'
import { Container } from '../../components/backgroundContainer'

function Home({ projects }) {
    return (
        <>
            <Container>
                <Intro />
                <About />
                <ProjectSummary projects={projects} />
            </Container>
        </>
    )
}

export default Home
