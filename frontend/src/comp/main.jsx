import React, { Component } from 'react'
import './navbar.css'

export default class main extends Component {
    render() {
        return (
            <div>
                <ul className='sticky'>
                    <li><a href="#main">Home</a></li>
                    <li><a href="#home">About Me</a></li>
                    <li><a href="#news">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li style={{ float: 'right' }}><a className="active" href="#about">Contact</a></li>
                </ul>
                <div id='main' className='maindiv' style={{ paddingTop: '150px' }}>
                    <div className='inmaindiv' ></div>
                    <div id='triangle-bottomleft'></div>
                </div>
                <div id='home'>home</div>
                <div id='news'>neeeeee</div>
                <div id='contact'>hhhh</div>


            </div>
        )
    }
}
