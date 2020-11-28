import React from 'react'
import { Container, Hello, Image, Text, Wrapper, ImageWrapper } from './heroElements'
import Memoji from '../../assets/memoji.png'

function Hero() {
    return (
        <>
            <Container>
                <Wrapper>
                    <Hello>
                        Hello,<br /> I'm Sergio
                    </Hello>
                    <Text>A self-taught Front End Developer</Text>
                </Wrapper>
                <ImageWrapper>
                    <Image src={Memoji}></Image>
                </ImageWrapper>
            </Container>
        </>
    )
}

export default Hero
