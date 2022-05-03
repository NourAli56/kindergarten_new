import React,{useState} from 'react';
import './Inner_Images.css'
import Nav from '../Navbar/Nav';
import Footer from '../footer/Footer';
import img11 from './imagee1/11.jpg'
import img22 from './imagee1/22.jpg'
import img33 from './imagee1/33.jpg'
import img44 from './imagee1/44.jpg'
import img55 from './imagee1/55.jpg'
import img66 from './imagee1/66.jpeg'
import img77 from './imagee1/77.jpg'
import img88 from './imagee1/88.jpg'
import img99 from './imagee1/99.jpg'

function Inner_Images({night}) {
    let data=[
        {
            id:1,
            imgSrc: img11
        },
        {
            id:2,
            imgSrc: img22
        },
        {
            id:3,
            imgSrc: img33
        },
        {
            id:4,
            imgSrc: img44
        },
        {
            id:5,
            imgSrc: img55
        },
        {
            id:6,
            imgSrc: img66
        },
        {
            id:7,
            imgSrc: img77
        },
        {
            id:8,
            imgSrc: img88
        },
        {
            id:9,
            imgSrc: img99
        },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <div  className={night? "white" : "black"}>
            <Nav night={night} />
            <div className={model? "model1 open1" : "model1"}>
                <img src={tempimgSrc} />
                <i className="fa fa-times closee1" onClick={()=>setModel(false) }></i>
            </div>
            <div className='allImage1'>
                {
                    data.map((item,index)=>{
                        return(
                            <div className='pics1' key={index} onClick={()=> getImg(item.imgSrc)}>
                                <img src={item.imgSrc} />
                            </div>
                        )
                    })
                }
            </div>
            <Footer night={night}  />
        </div>
    )
}

export default Inner_Images;