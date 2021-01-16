import styled from "styled-components"

export const ContactContainer = styled.div`
color:#fff;
background:#fff;
font-family: 'Lato', sans-serif;


@media screen and (max-width: 768px){
    padding:100px 0;
}
`;

export const ContactWrapper = styled.div`
display:grid;
z-index:1;
width:100%;
height:500px;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding: 0 24px;
justify-content:center;

`;

export const ContactRow = styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items: center;
grid-template-areas:'col2 col1';

@media screen and (max-width:768px){
    grid-template-areas:'col2' 'col1'

} 
`;

export const Column1 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`;

export const Column2 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`;

export const TextWrapper = styled.div`
max-width:540px;
padding-top:0;
padding-bottom:30px;
`;

export const TopLinemin = styled.p`
color:#585052;
font-size:16px;
line-height:22px;
font-weight:700;
letter-spacing:1.4px;
margin-bottom:6px
`;

export const TopLine = styled.h1`
margin-bottom:24px;
font-size:38px;
line-height:1.1;
font-weight:700;
color:#010606;
`;

export const SubTitle = styled.p`
max-width:440px;
margin-bottom:25px;
font-size:18px;
line-height:24px;
color:#585052;
`;

export const ImgWrap = styled.div`
max-width:555px;
height:100%;`;

export const Img = styled.img`
width:100%;
margin:00 10px 0;
padding-right:0
`;

export const ContentLinks = styled.a`
margin-right: 18px;
`;