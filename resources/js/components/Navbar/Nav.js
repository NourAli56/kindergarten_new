import React, { useState } from "react";
import './Nav.css'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import logo from './logo55.png'

const Nav = ({ night, setNight }) => {
    return (
        <header className={night ? "header" : "night_header"}>

            <input type="checkbox" name="" id="toggler" />
            <label for="toggler" className={night ? "fa fa-bars menu" : "fa fa-bars night_menu"}></label>

            <a href="#" className="logo"><img src={logo} /></a>

            <div className={night ? "navbar" : "night_navbar"}>
                <Link to="/"><i>الرئيسية</i></Link>
                <HashLink smooth to="#services"><i>الخدمات</i> </HashLink>
                <HashLink smooth to="#activity"><i>الأنشطة</i> </HashLink>
                <HashLink smooth to="#our_prices"><i>الأسعار</i> </HashLink>
                <HashLink smooth to="#Location"><i>الموقع</i> </HashLink>
            </div>

            <div class="icons">
                <HashLink smooth to="#gallery" className="fa fa-images"></HashLink>
                {/*<Link to="/read" className="fa fa-table"></Link>*/}
            </div>

        </header>
    )
}

export default Nav;