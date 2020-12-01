import React from 'react'
import { Container, Hello, Image, Text, Wrapper, ImageWrapper, Box } from './heroElements'
import Memoji from '../../assets/memoji.png'

function Hero() {
    return (
        <>
            <Container id='hero'>
                <Wrapper>
                    <Box>
                        <Hello animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y : -100 }} transition={{ duration: 0.8 }}>
                            Hello,<br /> I'm Sergio
                        </Hello>
                        <Text>A self-taught Front End Developer</Text>
                    </Box>
                    <ImageWrapper animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.8 }}>
                        <Image src={Memoji}></Image>
                    </ImageWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default Hero
