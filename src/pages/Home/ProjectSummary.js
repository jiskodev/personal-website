import React from 'react'
import { Container, ProjectWrapper, ImageWrapper, ImageOpacity, Image, InfoWrapper, ProjectTitle, ProjectDescription, ProjectLink } from './projectSummaryElements'
import useHover from '../../hooks/useHover'

function Project ({ title, description, imagePath, number, to}) {
    const [hovering, attrs] = useHover()

    return (
        <ProjectWrapper key={number} {...attrs}>
                    {hovering === true && <h1>Hovering</h1>}
                    <ImageWrapper>
                        <ImageOpacity>

                        </ImageOpacity>
                        <Image src={imagePath}></Image>
                    </ImageWrapper>
                    <InfoWrapper>
                        <ProjectTitle>{title}</ProjectTitle>
                        <ProjectDescription>{description}</ProjectDescription>
                        <ProjectLink to={`/${to}`}>View Project</ProjectLink>
                    </InfoWrapper>
                    </ProjectWrapper>
    )
}


function ProjectSummary({ projects }) {

    return (
        <>
        <Container id='projects'>
                {projects.map(project => (
                    <Project {...project} />
                    ))}
                    
                
            
        </Container>
        </>
    )
}

export default ProjectSummary
