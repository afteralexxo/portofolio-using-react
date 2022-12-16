import './TopBar.css'
import { useState, useLayoutEffect, useRef } from 'react'

export default function TopBar (props) {

    return (
        <div className="topbar">
            <a className="logo">
                <span className="first-name">Alemayehu</span>
                {/* <span className='nick-name'>hu</span> */}
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