import React from 'react'
import "./Aside.css"

function Aside() {
    return (
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

                    <small>Tipsters At Your Service</small>

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
    )
}

export default Aside