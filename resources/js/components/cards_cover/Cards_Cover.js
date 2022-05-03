import React from "react";
import './Cards_Cover.css'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function Cards_Cover({ night }) {
    return (
        <div className="cards" >
            <Link className="cards_link" to="/Images"><div className={night ? "card" : "night_card"}>
                <div className="inner">
                    <i className="fa fa-images blue"></i>
                    <p className={night? "inner_para" : "night_inner_para"}>تعرف على الروضة </p>
                </div>
            </div></Link>
            <Link className="cards_link" to="/Gallery"><div className={night ? "card" : "night_card"}>
                <div className="inner">
                    <i className="fas fa-skating green"></i>
                    <p className={night? "inner_para" : "night_inner_para"}>تعرف على الأنشطة </p>
                </div>
            </div></Link>
            <HashLink className="cards_link" smooth to="#services"><div className={night ? "card" : "night_card"}>
                <div className="inner">
                    <i className="fa fa-bus purpel"></i>
                    <p className={night? "inner_para" : "night_inner_para"}>تعرف على الخدمات</p>
                </div>
            </div></HashLink>
        </div>
    )
}

export default Cards_Cover;