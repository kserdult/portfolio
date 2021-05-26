import React from 'react'
import kep from './kep.jpg'
import image from './image.png'
import cv from './CV.pdf'
import {MdMail, MdLocationCity, MdFileDownload} from 'react-icons/md'
import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io'

const Main =()=>{
    return(
        <div className="main">
            <div className="mainPart">
            <div className="kep">
                <img src={kep} className="image" alt="Serdült Károly" title="Serdült Károly"/>
            </div>
            <div className="information">
            <h1>Serdült Károly</h1>
            <h2>Junior Front-end developer</h2>
            <ul>
                <li>
                    <MdMail className="ikonok"/>kserdult@gmail.com
                </li>
                <li>
                <MdLocationCity className="ikonok"/>4032 Debrecen, Hungary
                </li>
            </ul>
            <ul className="social">
                    <li>
                        <a href="https://github.com/kserdult" target="_blank"><IoLogoGithub className="ikonok"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/k%C3%A1roly-serd%C3%BClt-1b998720a/" target="_blank"><IoLogoLinkedin className="ikonok"/></a>
                    </li>
                </ul>
            </div>
            </div>
            <div className="wrap">
            <img src={image} className="developImage" alt="Developing" title="Developing"/>
            <div className="about">
                <h3>About me</h3>
                <p>
                    Hello, I'm Károly, web-, software developer. I have rich experience with C# and React, HTML, CSS.
                </p>
                <ul className="skills">
                    <li>
                    JavaScript
                    </li>
                    <li>
                        Unity
                    </li>
                    <li>
                    C#
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        SASS
                    </li>
                    <li>
                        React
                    </li>
                    </ul>
                    <ul className="skills"> 
                    <li>
                        HTML
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        Microsoft Office
                    </li>
                    <li>
                        Cisco IOS
                    </li>
                </ul>
                <a href={cv} target="_blank" rel="noopener noreferrer" download="SerdültKároly_CV.pdf">
                <button className="cvdownload">Download CV <MdFileDownload className="downloadIcon" /></button>
                </a>
            </div>
            </div>
        </div>
    );
}

export default Main;