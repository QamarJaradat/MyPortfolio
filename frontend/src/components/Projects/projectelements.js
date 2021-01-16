import styled from 'styled-components'

export const ProjectsContainer = styled.div`
height:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#010606;
font-family: 'Lato', sans-serif;


@media screen and (max-width: 968px){
    height:1000px;
}
@media screen and (max-width: 780px){
    height:1400px;
}
`;

export const ProjectsWrapper = styled.div`
max-width: 1000px;
margin:0 auto;
display: grid;
grid-template-columns:1fr 1fr 1fr;
align-items: center;
grid-gap: 60px;
padding:0 50px;


 @media screen and (max-width: 1000px) {
  grid-template-columns:1fr 1fr;
 }
 @media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  padding:0 20px;
 }
`;


export const ProjectsCard = styled.div`
background:#fff;
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items: center;
border-radius: 10px;
height: 340px;
max-height: 340px;
max-width:300px;
padding:30px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
}
`;
export const ProjectImg = styled.img`
height:130px;
width:210px;
margin-bottom:10px
`;

export const ProjectsH1 = styled.h1`
font-size:2.5rem;
color:#fff;
margin-bottom:40px;

@media screen and (max-width: 480px){
    font-size:2rem;
}
`;
export const ProjectsH2 = styled.h2`
font-size:1rem;
margin-bottom:10px;
`;
export const ProjectsP = styled.p`
font-size:0.8rem;
text-align:center;

`;
export const ProjectstLinks = styled.a`
margin-right: 18px;
`;