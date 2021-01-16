import React, { Component, useState } from 'react'
import { MainBackGround, Button, MainContainer, ImgBG, MainContent, MainH1, MainP, MainBtnWrapper, ArrowForward, ArrowRight } from './mainelements'
import './mainstyle.css'
class SplitText extends Component {
    render() {
        return (
            <span aria-label={this.props.copy} role={this.props.role}>
                {this.props.copy.split("").map(function (char, index) {
                    let style = { "animation-delay": (0.6 + index / 10) + "s" }
                    return <span
                        aria-hidden="true"
                        key={index}
                        style={style}>
                        {char}
                    </span>;
                })}
            </span>
        );
    }
}
const MainPage = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        < >
            <MainContainer id='home'>
                <MainBackGround>
                    <ImgBG src='https://iammagnus.com/wp-content/uploads/2016/05/website-design-background-1.jpg'></ImgBG>
                </MainBackGround>
                <MainContent>
                    <MainH1>
                        <SplitText copy="Hi, I'm Qamar Jaradat" role="heading" />
                    </MainH1>
                    <MainP>Full Stack Developer</MainP>
                    <MainBtnWrapper>
                        <Button to='projects' onMouseEnter={onHover} onMouseLeave={onHover}
                            smooth={true} duration={500} spy={true}
                            exact="true" offset={-80}>
                            <span style={{ marginBottom: '6px' }}>Check my Projects</span>  {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </MainBtnWrapper>
                </MainContent>
            </MainContainer>

        </ >
    )
}

export default MainPage
