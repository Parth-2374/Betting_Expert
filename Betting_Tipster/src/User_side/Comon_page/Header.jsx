import React, { useState } from 'react'
import "./Header.css"
function Header() {
    const [darkMode, setDarkMode] = useState(true)
    const [searchOpen, setsearchOpen] = useState(false)
    return (

        <div className={darkMode ? "app dark-theme" : "app light-theme"}>
            <header>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a href="" className='navbar-brand logo-wrapper'>
                            <div className="logo-mark">
                                <i className="fa-mosaic fa-solid fa-trophy fa-width-auto" style={{ color: '#25d14e' }} />
                            </div>

                            <div className="logo-text">
                                <div className="brand-name">
                                    <span className="bet">Betting</span>
                                    <span className="exp">Expert</span>
                                </div>

                                <small className="tip">
                                    Tipsters At Your Service
                                </small>

                            </div>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tips</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hot-Tips</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Football</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tennis</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Basketball</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Stats</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tipsters</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Bookmakers</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role='button' data-bs-toggle="dropdown" href="#">More</a>
                                    <ul className='dropdown-menu'>
                                        <li><a href="#" className='dropdown-item'>About As</a></li>
                                        <li><a href="#" className='dropdown-item'>Contact </a></li>
                                    </ul>
                                </li>

                            </ul>
                            <div className='header-actions'>
                                {searchOpen && (<input type="text" className="search-input" placeholder="Search..." autoFocus />)}
                                <div className="serch-box">
                                    <button>
                                        <i className="fa-notdog-duo fa-solid fa-magnifying-glass serch-bar" />
                                    </button>
                                </div>
                                <button className='theme-toggle' type='button' onClick={() => setDarkMode(!darkMode)} title={darkMode ? "Light Mode " : "Dark Mode"}>
                                    <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
                                </button>
                                <a href="#" className="login-btn"> Login </a>
                                <a href="#" className="register-btn"> Register </a>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
            <div className="page-layout">

                {/* ASIDE */}
                <aside className="aside">

                    {/* LOGO */}
                    {/* <div className="aside-logo">

                        <div className="aside-logo-icon">
                            <i className="fa-solid fa-trophy"></i>
                        </div>

                        <div className="aside-logo-text">

                            <div className="aside-brand-name">
                                <span className="aside-bet">Betting</span>
                                <span className="aside-exp">Expert</span>
                            </div>

                            <small>
                                Tipsters At Your Service
                            </small>

                        </div>

                    </div> */}


                    {/* MENU */}
                    <div className="aside-menu">

                        <a href="#" className="aside-item active">
                            <i className="fa-solid fa-house"></i>
                            <span>Dashboard</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-clipboard-list"></i>
                            <span>Tips</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-fire"></i>
                            <span>Hot Tips</span>
                            <span className="hot-badge">HOT</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-futbol"></i>
                            <span>Football</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-circle"></i>
                            <span>Tennis</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-basketball"></i>
                            <span>Basketball</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-horse"></i>
                            <span>Racing</span>
                        </a>

                        <div className="aside-divider"></div>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-chart-column"></i>
                            <span>Stats</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-user-tie"></i>
                            <span>Tipsters</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-building"></i>
                            <span>Bookmakers</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-trophy"></i>
                            <span>Competitions</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-newspaper"></i>
                            <span>Previews</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-futbol"></i>
                            <span>Football Statistics</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-horse"></i>
                            <span>Racing</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-dice"></i>
                            <span>Casino</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-diamond"></i>
                            <span>Poker</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-circle-dot"></i>
                            <span>Bingo</span>
                        </a>

                        <div className="aside-divider"></div>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-compass"></i>
                            <span>Gambling Guide</span>
                        </a>

                        <a href="#" className="aside-item">
                            <i className="fa-solid fa-blog"></i>
                            <span>Blog</span>
                        </a>

                    </div>


                    {/* COMMUNITY */}
                    <div className="community-box">

                        <h6>JOIN OUR COMMUNITY</h6>

                        <p>
                            Get free tips, stats and expert
                            advice straight to your inbox.
                        </p>

                        <button type="button">
                            <i className="fa-solid fa-paper-plane"></i>
                            Join Now
                        </button>

                    </div>

                </aside>
            </div>

        </div>
    )
}

export default Header
