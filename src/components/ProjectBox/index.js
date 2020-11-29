import React from 'react'
import { Container, Icon, LeftBox, Number, NumberBox, NumberLine, ProjectDescription, ProjectImage, ProjectImageWrapper, ProjectLink, ProjectLinkBox, ProjectTitle, RightBox, Wrapper } from './projectBoxElements'


function ProjectBox({ number, title, description, imagePath, to }) {
    console.log(imagePath)
    return (
        <div>
            <Container>
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
