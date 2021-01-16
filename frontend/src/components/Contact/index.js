import React from 'react'
// import GitHubIcon from '@material-ui/icons/GitHub';
import {
    ContactContainer,
    ContactWrapper,
    ContactRow,
    Column1,
    TextWrapper,
    TopLine,
    SubTitle,
    ImgWrap,
    Column2,
    Img,
    TopLinemin,
    ContentLinks
} from './contactelements'
const Contact = () => {
    return (
        <>
            <ContactContainer id='contact'>
                <ContactWrapper>
                    <ContactRow >
                        <Column1>
                            <TextWrapper>
                                <TopLine>Work With Me</TopLine>
                                <TopLinemin> Email Address</TopLinemin>
                                <SubTitle>QamarJaradat19@gmail.com</SubTitle>
                                <TopLinemin>Phone No.</TopLinemin>
                                <SubTitle>+972 569 671 745</SubTitle>
                                <ContentLinks href='https://github.com/QamarJaradat' >
                                    <i className="fa fa-github" style={{ color: '#464142', fontSize: '26px' }}></i>
                                </ContentLinks>
                                <ContentLinks href='https://www.linkedin.com/in/qamar-jaradat-56781b117/'>
                                    <i className="fa fa-linkedin-square" style={{ color: '#464142', fontSize: '26px' }}></i>
                                </ContentLinks>

                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src='https://i.imgur.com/cIAeb91.png' />
                            </ImgWrap>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>

        </>
    )
}

export default Contact
