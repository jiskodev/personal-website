import React from 'react'
import { Container, Hello, Image, Text, Wrapper, ImageWrapper, Box } from './introElements'
import TextScramble from '@twistezo/react-text-scramble'
import Memoji from '../../assets/memoji.png'


const texts = [
    "A self-taught Front End Developer"
]

function Intro() {
    return (
        <>
            <Container id='hero'>
                <Wrapper>
                    <Box>
                        
                        <Hello animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y : -100 }} transition={{ duration: 0.8 }}>
                            Hello,<br /> I'm Sergio
                        </Hello>
                        <Text><TextScramble texts={texts}/></Text>
                    </Box>
                    <ImageWrapper animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.8 }}>
                        <Image src={Memoji}></Image>
                    </ImageWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default Intro
