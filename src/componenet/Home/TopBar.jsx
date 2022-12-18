import './TopBar.css'
import { useState, useLayoutEffect, useRef } from 'react'
import AlexLogo from './../../assets/logo2.jpeg'

export default function TopBar (props) {

    return (
        <div className="topbar">
            <a className="logo">
                <img src={AlexLogo} alt="" width="200px" height="100%" />
            </a>
            <nav className="main-menu">
                <a href="" className="nav-item">Home</a>
                <a href="" className="nav-item">About</a>
                <a href="" className="nav-item">Projects</a>
                <a href="" className="nav-item">Tools</a>
            </nav>
        </div>
    )
}