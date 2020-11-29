import React from 'react'
import { Container, Hello, Image, Text, Wrapper, ImageWrapper, Box } from './heroElements'
import Memoji from '../../assets/memoji.png'

function Hero() {
    return (
        <>
            <Container>
                <Wrapper>
                    <Box>
                        <Hello>
                            Hello,<br /> I'm Sergio
                        </Hello>
                        <Text>A self-taught Front End Developer</Text>
                    </Box>
                    <ImageWrapper>
                        <Image src={Memoji}></Image>
                    </ImageWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default Hero
