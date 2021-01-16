import React from 'react'

import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    TextWrapper,
    TopLine,
    SubTitle,
    ImgWrap,
    Column2,
    Img
} from './aboutelements'
const About = () => {
    return (
        <>
            <AboutContainer id='about'>
                <AboutWrapper>
                    <AboutRow >
                        <Column1>
                            <TextWrapper>
                                <TopLine>About Me</TopLine>
                                <SubTitle>I am a driven individual with a great passion for technology and
                                software developer who can work well in teams. Have the ability to adapt to any
                                situation, tend to see a solution to each problem, love learning new things every day,
                                If I do not know something I will learn it.
                                </SubTitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src='https://i.imgur.com/iKjkVUT.png' />
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>

        </>
    )
}

export default About
