import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#0d0d0d;
display:grid;
align-items:center;
top:0;
left:0;
transition: 0.3rem ease-in-out;
// top:0;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
color:#fff;
`;

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;

`;

export const SidebarWrapper = styled.div`
color:#fff;
`;

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,100px);
text-align:center;
font-family: 'Lato', sans-serif;


@media screen and (max-width:460px){
    grid-template-rows:repeat(6,60px);
}
`;

export const SidebarLinks = styled(Link)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition: 0.2s ease-in-out;
cursor:pointer;

&:hover{
    color:#DBABBE;
    transition:0.2s ease-in-out;
}
`;

