import React, {useEffect} from 'react'
import { Container, ProjectWrapper, HoveringWrapper, ImageWrapper, ImageOpacity, Image, InfoWrapper, ProjectTitle, ProjectDescription, ProjectLink, HoveringBackground, ProjectNumber, ProjectContainer } from './projectSummaryElements'
import useHover from '../../hooks/useHover'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ScrollVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 }},
    hidden: { opacity: 0, y: 400 }
}

const hoverVariants = {
    visible: { width: '100%', transition: { duration: 1 }},
    hidden: { width: 0, transition: { duration: 0.5 } }
}

const hoverInfoVariants = {
    visible: { scale: 1.4, transition: { duration: 0.5 }},
    hidden: { scale: 1, transition: { duration: 0.5 } }
}

const hoverNumberVariants = {
    visible: { opacity: 1, y: -50, transition: {delay: 0.5, duration: 0.5 }},
    hidden: { opacity: 0, y: 0, transition: { duration: 0.5 } }
}

function Project ({ title, description, imagePath, number, to}) {
    const [attrs, hovering] = useHover()

    const hoverControls = useAnimation()
    const viewControls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            viewControls.start('visible')
        }   else if (!inView)  {
            viewControls.start('hidden')
        }
    }, [viewControls, inView])


    useEffect(() => {
        if (hovering) {
            hoverControls.start('visible')
        }   else if (!hovering)  {
            hoverControls.start('hidden')
        }
    }, [hoverControls, hovering])

    return (
        <ProjectContainer ref={ref}
        animate={viewControls}
        initial="hidden"
        variants={ScrollVariants}>
            <ProjectWrapper ref={attrs}>
                <HoveringWrapper></HoveringWrapper>
                <ProjectNumber
                    animate={hoverControls}
                    initial="hidden"
                    variants={hoverNumberVariants}>
                    {number}
                </ProjectNumber>
                <ImageWrapper>
                    <HoveringBackground
                    animate={hoverControls}
                    initial="hidden"
                    variants={hoverVariants}
                    ></HoveringBackground>
                        <ImageOpacity>
                        </ImageOpacity>
                        <Image src={imagePath}></Image>
                </ImageWrapper>
                <InfoWrapper
                animate={hoverControls}
                initial="hidden"
                variants={hoverInfoVariants}
                style={{ originX: 1, originY: 1 }}
                >
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDescription>{description}</ProjectDescription>
                    <ProjectLink to={`/${to}`}>View Project</ProjectLink>
                </InfoWrapper>
            </ProjectWrapper>
        </ProjectContainer>
        
    )
}


function ProjectSummary({ projects }) {

    return (
        <>
        <Container id='projects'>
                {projects.map(project => (
                    <Project key={project.id} {...project} />
                    ))}
        </Container>
        </>
    )
}

export default ProjectSummary
