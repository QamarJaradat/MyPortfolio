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
                    <div className='namediv'>
                        <h5>Qamar Jaradat</h5>
                        <p>Full stack Developer</p>
                    </div>
                    <div className='imgdiv'>
                    </div>
                </div>
                <div id='home'>home</div>
                <div id='news' style={{ marginBottom: '213px' }}>
                    <div className='fulldiv' style={{ backgroundColor: 'white' }}></div>
                    <div id='triangle-bottomroghtbiggeer'></div>
                    <div className='whitediv' style={{ width: '65%', backgroundColor: '#ccd2eb' }} >
                    </div>
                </div>
                <div id='contact' >
                    <div className='fulldiv' ></div>
                    <div id='triangle-bottomleftbiggeer' ></div>
                    <div className='whitediv' > <h2 className='contme'>Work With Me</h2>
                        <h4>Email Address</h4>
                        <p>moon19.qs@gmail.com</p>
                        <br></br>
                        <h4>Phone Number</h4>
                        <p>+972 569 671 745</p>
                    </div>
                    <div className='contactimgdiv'></div>
                </div>


            </div>
        )
    }
}
