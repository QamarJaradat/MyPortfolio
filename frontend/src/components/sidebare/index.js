import React from 'react'
import { SidebarContainer, SidebarLinks, SidebarMenu, SidebarWrapper, Icon, CloseIcon } from './sidebar'
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to='home' smooth={true} duration={500} spy={true}
                        exact="true" offset={-80} onClick={toggle}>Home</SidebarLinks>
                    <SidebarLinks to='about' smooth={true} duration={500} spy={true}
                        exact="true" offset={-80} onClick={toggle}>About</SidebarLinks>
                    <SidebarLinks to='projects' smooth={true} duration={500} spy={true}
                        exact="true" offset={-80} onClick={toggle}>Projects</SidebarLinks>
                    <SidebarLinks to='contact' smooth={true} duration={500} spy={true}
                        exact="true" offset={-80} onClick={toggle}>Contact</SidebarLinks>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
