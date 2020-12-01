import React, {useEffect} from 'react'
import { Container, Icon, LeftBox, Number, NumberBox, NumberLine, ProjectDescription, ProjectImage, ProjectImageWrapper, ProjectLink, ProjectLinkBox, ProjectTitle, RightBox, Wrapper } from './projectBoxElements'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const BoxVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 }},
    hidden: { opacity: 0, y: 400 }
}

function ProjectBox({ number, title, description, imagePath, to }) {
    const controls = useAnimation()
    const [ ref, inView ] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }   
    }, [controls, inView])
    return (
        <div>
            <Container ref={ref}
            animate={controls}
            initial="hidden"
            variants={BoxVariants} >
                <Wrapper>
                    <LeftBox>
                        <NumberBox>
                            <NumberLine></NumberLine>
                            <Number>{number}</Number>
                        </NumberBox>
                        <ProjectTitle>{title}</ProjectTitle>
                        <ProjectDescription>{description}</ProjectDescription>
                        <ProjectLinkBox>
                            <ProjectLink to={`/${to}`}>
                            View project <Icon size={30}></Icon>
                            </ProjectLink>
                        </ProjectLinkBox>
                    </LeftBox>
                    <RightBox>
                        <ProjectImageWrapper>
                            <ProjectImage src={imagePath}></ProjectImage>
                        </ProjectImageWrapper>
                    </RightBox>
                </Wrapper>
            </Container>
        </div>
    )
}

export default ProjectBox
