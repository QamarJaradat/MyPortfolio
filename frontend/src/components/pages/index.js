import Navbar from '../Navbar'
import Sidebar from '../sidebare'
import React, { useState } from 'react'
import MainPage from '../Main'
import Projects from '../Projects'
import About from '../About'
import Contact from '../Contact'

const HomePage = () => {
    const [isOpen, setisOpen] = useState(false)
    const toggle = () => {
        setisOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <MainPage />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default HomePage
