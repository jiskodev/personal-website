import React from 'react'
import { Container, Icon, LeftBox, Number, NumberBox, NumberLine, ProjectDescription, ProjectImage, ProjectImageWrapper, ProjectLink, ProjectLinkBox, ProjectTitle, RightBox, Wrapper } from './projectBoxElements'
import Image from '../../assets/github-battle.png'


function ProjectBox() {
    return (
        <div>
            <Container>
                <Wrapper>
                    <LeftBox>
                        <NumberBox>
                            <NumberLine></NumberLine>
                            <Number>01</Number>
                        </NumberBox>
                        <ProjectTitle>GitHub Battle</ProjectTitle>
                        <ProjectDescription>Application made in React using the GitHub API</ProjectDescription>
                        <ProjectLinkBox>
                            <ProjectLink>
                            View project <Icon size={30}></Icon>
                            </ProjectLink>
                        </ProjectLinkBox>
                    </LeftBox>
                    <RightBox>
                        <ProjectImageWrapper>
                            <ProjectImage src={Image}></ProjectImage>
                        </ProjectImageWrapper>
                    </RightBox>
                </Wrapper>
            </Container>
        </div>
    )
}

export default ProjectBox
