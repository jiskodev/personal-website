import React from 'react'
import { BoxLeft, BoxRight, Container, LightLine, LinksBox, OutsideLink, ProjectLinkBox, ListDescription, ProjectImage, TextDescription, Title, Wrapper, WrapperHead, Icon } from './projectViewElements'



function ProjectView({ title, imagePath, description, items, visitWebsite, viewCode }) {
    return (
        <>
            <Container>
                <Wrapper>
                    <WrapperHead>
                        <BoxLeft>
                            <Title initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.8, delay: 0.3 }}>{title}</Title>
                            <TextDescription>{description}</TextDescription>
                            <LinksBox>
                                {visitWebsite ? <ProjectLinkBox><OutsideLink href={visitWebsite} target='_blank'>Visit Website<Icon size={30}></Icon></OutsideLink></ProjectLinkBox> : null }
                                {viewCode ? <ProjectLinkBox><OutsideLink href={viewCode} target='_blank'>View Code<Icon size={30}></Icon></OutsideLink></ProjectLinkBox> : null }
                            </LinksBox>
                        </BoxLeft>
                        <BoxRight>
                        <LightLine></LightLine>
                            <ListDescription>
                                {items[0]}
                            </ListDescription>
                            <LightLine></LightLine>
                            <ListDescription>
                                {items[1]}
                            </ListDescription>
                            <LightLine></LightLine>
                            <ListDescription>
                                {items[2]}
                            </ListDescription>
                            <LightLine></LightLine>
                        </BoxRight>
                    </WrapperHead>
                    <ProjectImage src={imagePath}></ProjectImage>
                </Wrapper>
            </Container>
        </>
    )
}

export default ProjectView
