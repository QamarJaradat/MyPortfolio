import React, { Component } from 'react'
import './navbar.css'


class SplitText extends Component {
    render() {
        return (
            <span aria-label={this.props.copy} role={this.props.role}>
                {this.props.copy.split("").map(function (char, index) {
                    let style = { "animation-delay": (0.6 + index / 10) + "s" }
                    return <span
                        aria-hidden="true"
                        key={index}
                        style={style}>
                        {char}
                    </span>;
                })}
            </span>
        );
    }
}
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
                    <div className='namediv'>
                        <h1><SplitText copy="Hi, I'm Qamar Jaradat" role="heading" /></h1>
                        {/* <h1><SplitText copy="Full stack Developer" role="heading" wait={1000} /></h1> */}
                        <p>Full stack Developer</p>
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
