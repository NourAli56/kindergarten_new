import React, { useState } from "react";
import Nav from '../components/Navbar/Nav'
import Cover from "../components/cover/Cover";
import Cards_Cover from "../components/cards_cover/Cards_Cover";
import About_me from "../components/about_me/About_me";
import Gallery from "../components/gallery/Gallery";
import Services from "../components/Services/Services";
import Outer_Activity from '../components/outer_activity/Outer_Activity'
import Price from "../components/price/Price";
import Location from '../Components/Location/Location'
import '../../css/app.css'
import Footer from "../components/footer/Footer";

function Home({ night }) {
    return (
        <div className={night ? "white" : "black"}>
            <Nav night={night} />
            <Cover />
            <Cards_Cover night={night} />
            <About_me night={night} />
            <Gallery night={night} />
            <Services night={night} />
            <Outer_Activity night={night} />
            <Price night={night} />
            <Location />
            <Footer night={night} />
        </div>
    )
}

export default Home;