import React from "react";
import './Cover.css'
import {HashLink} from 'react-router-hash-link'

function Cover() {
    return (
        <div className="cover" id="cover">
            <h2>مرحباً بك في</h2>
            <h1> ... روضة الأماني للأطفال </h1>
            <HashLink smooth to="#about"><button>البدء</button></HashLink>
        </div>

    )
}

export default Cover;