import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './navbarelements'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
const Navbar = ({ toggle }) => {
    const [scrollnav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80)
            setScrollNav(true)
        else
            setScrollNav(false)

    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollnav={scrollnav}>
                    <NavbarContainer>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='home' smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='about' smooth={true} duration={500} spy={true}
                                    exact="true" offset={-80}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='projects' smooth={true} duration={500} spy={true}
                                    exact="true" offset={-80}>Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact' smooth={true} duration={500} spy={true}
                                    exact="true" offset={-80}>contact</NavLinks>
                            </NavItem>
                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
