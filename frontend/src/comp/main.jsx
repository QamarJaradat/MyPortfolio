import React, { Component } from 'react'
import './navbar.css'

export default class main extends Component {
    render() {
        return (
            <div>
                <ul style={{ position: 'fixed', width: '100%' }}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li style={{ float: 'right' }}><a className="active" href="#about">About</a></li>
                </ul>
                <div id='home'>home</div>
                <div id='news'>neeeeee</div>
                <div id='contact'>hhhh</div>


            </div>
        )
    }
}
