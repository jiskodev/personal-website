import React from 'react'
import About from './About'
import Intro from './Intro'
import ProjectSummary from './ProjectSummary'
import { Container } from '../../components/backgroundContainer'
import ContactSection from './ContactSection'

function Home({ projects }) {
    return (
        <>
            <Container>
                <Intro />
                <About />
                <ProjectSummary projects={projects} />
                <ContactSection />
            </Container>
        </>
    )
}

export default Home
