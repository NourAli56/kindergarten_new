import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import '../../css/app.css'
import AllImage from '../components/AllImage/AllImage'
import Inner_Images from '../components/inner_images/Inner_Images'


function Example() {
  const [night, setNight] = useState(true);
  const changeMode = () => {
    setNight(!night);
  }
  return (
    <BrowserRouter>
      <i className={night ? "fas fa-moon moon" : "fas fa-moon night_moon"} onClick={() => changeMode()} ></i>
      <Routes>
        <Route exact path="/" element={<Home night={night} />} />
        <Route exact path="/Gallery" element={<AllImage night={night} />} />
        <Route exact path="/Images" element={<Inner_Images night={night} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Example;

if (document.getElementById('example')) {
  ReactDOM.render(<Example />, document.getElementById('example'));
}
