import React, { Component } from 'react'
import logo from './HeaderLogo.png'
import * as Feather from 'react-feather'

import './MainBody.css'

export class MainBody extends Component {
    render() {
        return (
            <div className="Main">
                <img src={ logo } />
                <div className="Navbar">
                    <a href="https://www.instagram.com/salihozyurt1/" target = "_blank"><Feather.Instagram className="iconSet" color="#e43f5a" size="7vh" /></a>
                    <a href="https://www.linkedin.com/in/salih-%C3%B6zyurt-ba6a2395/" target = "_blank"><Feather.Linkedin className="iconSet" color="#e43f5a" size="7vh" /></a> 
                    <a href="https://github.com/salihozyurt" target = "_blank"><Feather.GitHub className="iconSet" color="#e43f5a" size="7vh" /></a> 
                    <a href="mailto:salih.zyurt@gmail.com" target = "_blank"><Feather.Mail className="iconSet" color="#e43f5a" size="7vh" /></a> 
                </div>
                <div className="About">
                    <p>Speaking english ? i live in english. it's not only language to me it's totally best way of expressing my own. you know, sometimes i'm dreaming of a world all people understand each other perfectly. yes i've a dream. imagine all the people dancing and touching each other, communicate in a joyful harmony. oğlum çay söyle bakma öyle sığır gibi! tea ?</p>
                </div>
            </div>
        )
    }
}

export default MainBody
