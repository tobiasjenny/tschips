import React from "react";
import { Link, useLocation } from "react-router-dom";
import './header.scss'


const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Produkte',
        path: "/produkte"
    },
    {
        display: 'Personalisieren',
        path: '/personalisieren'
    }
]

const Header = () => {

    const { pathname } = useLocation()
    const active = headerNav.findIndex(e => e.path === pathname);

    return (
        <>
            {/*
            <div className="header__wrap container">
                <div className="logo">
                    <Link to="/" >visit <span className="red" >Norway</span> </Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`} >
                                <Link to={e.path} >
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            */}

            <div className="header">
                <div>
                    <Link to="/" >visit <span className="red" >Norway</span> </Link>
                </div>
                <div  >
                    <ul className="nav">
                        {
                            headerNav.map((e, i) => (
                                <li key={i} className={`${i === active ? 'active' : ''}`} >
                                    <Link to={e.path} >
                                        {e.display}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header