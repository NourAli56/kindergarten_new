import React from "react";
import Slider from "react-slick";
import './Services.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service from './service.svg'

function Services({night}) {
    const settings = {
        dots: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1084,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 917,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },

        ]
    };
    return (
        <div className="servicess" id="services">
            <h2 className="teacher_title"><i>الخدمات</i>  </h2>
            <Slider {...settings} className="slider">
                <div>
                    <div className={night? "ser": "night_ser"}>
                        <div className={night? "all_ser" : "night_all_ser"}>
                            <h2 className={night? "title_ser" : "night_title_ser"}>التوصيل بالباص</h2>
                            <p className={night? "ser_para":"night_ser_para"}>نقدم لكم خدمة التوصيل بالباص بشكل آمن ومريح لكم ولأطفالكم حيث التسجيل يتم في الروضة</p>
                            <img className="ser_img" src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={night? "ser": "night_ser"}>
                        <div className={night? "all_ser" : "night_all_ser"}>
                            <h2 className={night? "title_ser" : "night_title_ser"}>التوصيل بالباص</h2>
                            <p className={night? "ser_para":"night_ser_para"}>نقدم لكم خدمة التوصيل بالباص بشكل آمن ومريح لكم ولأطفالكم حيث التسجيل يتم في الروضة</p>
                            <img className="ser_img" src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={night? "ser": "night_ser"}>
                        <div className={night? "all_ser" : "night_all_ser"}>
                            <h2 className={night? "title_ser" : "night_title_ser"}>التوصيل بالباص</h2>
                            <p className={night? "ser_para":"night_ser_para"}>نقدم لكم خدمة التوصيل بالباص بشكل آمن ومريح لكم ولأطفالكم حيث التسجيل يتم في الروضة</p>
                            <img className="ser_img" src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={night? "ser": "night_ser"}>
                        <div className={night? "all_ser" : "night_all_ser"}>
                            <h2 className={night? "title_ser" : "night_title_ser"}>التوصيل بالباص</h2>
                            <p className={night? "ser_para":"night_ser_para"}>نقدم لكم خدمة التوصيل بالباص بشكل آمن ومريح لكم ولأطفالكم حيث التسجيل يتم في الروضة</p>
                            <img className="ser_img" src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={night? "ser": "night_ser"}>
                        <div className={night? "all_ser" : "night_all_ser"}>
                            <h2 className={night? "title_ser" : "night_title_ser"}>التوصيل بالباص</h2>
                            <p className={night? "ser_para":"night_ser_para"}>نقدم لكم خدمة التوصيل بالباص بشكل آمن ومريح لكم ولأطفالكم حيث التسجيل يتم في الروضة</p>
                            <img className="ser_img" src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={night? "ser": "night_ser"}>
                        <div className={night? "all_ser" : "night_all_ser"}>
                            <h2 className={night? "title_ser" : "night_title_ser"}>التوصيل بالباص</h2>
                            <p className={night? "ser_para":"night_ser_para"}>نقدم لكم خدمة التوصيل بالباص بشكل آمن ومريح لكم ولأطفالكم حيث التسجيل يتم في الروضة</p>
                            <img className="ser_img" src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={night? "ser": "night_ser"}>
                        <div className={night? "all_ser" : "night_all_ser"}>
                            <h2 className={night? "title_ser" : "night_title_ser"}>التوصيل بالباص</h2>
                            <p className={night? "ser_para":"night_ser_para"}>نقدم لكم خدمة التوصيل بالباص بشكل آمن ومريح لكم ولأطفالكم حيث التسجيل يتم في الروضة</p>
                            <img className="ser_img" src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={night? "ser": "night_ser"}>
                        <div className={night? "all_ser" : "night_all_ser"}>
                            <h2 className={night? "title_ser" : "night_title_ser"}>التوصيل بالباص</h2>
                            <p className={night? "ser_para":"night_ser_para"}>نقدم لكم خدمة التوصيل بالباص بشكل آمن ومريح لكم ولأطفالكم حيث التسجيل يتم في الروضة</p>
                            <img className="ser_img" src={service} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={night? "ser": "night_ser"}>
                        <div className={night? "all_ser" : "night_all_ser"}>
                            <h2 className={night? "title_ser" : "night_title_ser"}>التوصيل بالباص</h2>
                            <p className={night? "ser_para":"night_ser_para"}>نقدم لكم خدمة التوصيل بالباص بشكل آمن ومريح لكم ولأطفالكم حيث التسجيل يتم في الروضة</p>
                            <img className="ser_img" src={service} />
                        </div>
                    </div>
                </div>
            </Slider>
            
        </div>
    )
}
export default Services;