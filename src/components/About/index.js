import React from 'react'
import { Container, Highlight, Text, Title, Wrapper, TechText, TechTextWrapper, TechTitle, ALink } from './aboutelements'

function About() {
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>
                        <Highlight>About me</Highlight>
                    </Title>
                    <Text>I'm Sergio, a 23 years old, Front-End Developer, based in Spain</Text>
                    <Text>Coming from a sales and marketing background, in October 2017 I decided it was time for a change and I left my job. I've been studying Front-End Development full time ever since and working as freelacer</Text>
                    <Text>I've took a lot of online courses like: <ALink href="https://www.codecademy.com/">CodeCademy Web Development Career Path</ALink>, <ALink href="https://ui.dev/">React, Router, Hooks and Redux at UI.dev</ALink>, and several <ALink href="https://www.freecodecamp.org/">freeCodeCademy certifications.</ALink></Text>
                    <Text>I think that the best way to learn is by practicing, so I also did a bunch of personal projects with the knowledge I gathered from the courses, you can check them below</Text>
                    <Text>I'm hard working, super curious, passionate, commited, and also a fast learner.</Text>

                    <TechTitle>My current <Highlight>stack</Highlight> of languages/technologies is:</TechTitle>
                    <TechTextWrapper>
                        <TechText>HTML5 - CSS3 - JAVASCRIPT - REACTJS - REDUX - SASS - WEBPACK - BABEL - GATSBY - GRAPHQL - FRAMERMOTION - STYLEDCOMPONENTS</TechText>
                    </TechTextWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default About