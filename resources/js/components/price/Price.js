import React from "react";
import Slider from "react-slick";
import './Price.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Price({ night }) {
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
        <div className="prices" id="our_prices">
            <h2 className="price_title"><i>الأسعار</i>  </h2>
            <Slider {...settings} className="price_slider">
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background1">
                            <p><span>1</span> المستوى</p>
                        </div>
                        <div className={night ? "card_price_bottom" : "night_card_price_bottom"}>
                            <p className={night ? "price_para" : "night_price_para"}>هذا المستوى مخصص للأطفال من عمر  <span className={night ? "age" : "night_age"}>5</span> إلى <span className={night ? "age" : "night_age"}>10</span> سنوات, السعر <span className={night ? "price_num" : "night_price_num"}>10$</span> , للمزيد من التفاصيل يرجى زيارتنا</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background2">
                            <p><span>2</span> المستوى</p>
                        </div>
                        <div className={night ? "card_price_bottom" : "night_card_price_bottom"}>
                            <p className={night ? "price_para" : "night_price_para"}>هذا المستوى مخصص للأطفال من عمر  <span className={night ? "age" : "night_age"}>5</span> إلى <span className={night ? "age" : "night_age"}>10</span> سنوات, السعر <span className={night ? "price_num" : "night_price_num"}>10$</span> , للمزيد من التفاصيل يرجى زيارتنا</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background3">
                            <p><span>3</span> المستوى</p>
                        </div>
                        <div className={night ? "card_price_bottom" : "night_card_price_bottom"}>
                            <p className={night ? "price_para" : "night_price_para"}>هذا المستوى مخصص للأطفال من عمر  <span className={night ? "age" : "night_age"}>5</span> إلى <span className={night ? "age" : "night_age"}>10</span> سنوات, السعر <span className={night ? "price_num" : "night_price_num"}>10$</span> , للمزيد من التفاصيل يرجى زيارتنا</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background1">
                            <p><span>4</span> المستوى</p>
                        </div>
                        <div className={night ? "card_price_bottom" : "night_card_price_bottom"}>
                            <p className={night ? "price_para" : "night_price_para"}>هذا المستوى مخصص للأطفال من عمر  <span className={night ? "age" : "night_age"}>5</span> إلى <span className={night ? "age" : "night_age"}>10</span> سنوات, السعر <span className={night ? "price_num" : "night_price_num"}>10$</span> , للمزيد من التفاصيل يرجى زيارتنا</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background2">
                            <p><span>5</span> المستوى</p>
                        </div>
                        <div className={night ? "card_price_bottom" : "night_card_price_bottom"}>
                            <p className={night ? "price_para" : "night_price_para"}>هذا المستوى مخصص للأطفال من عمر  <span className={night ? "age" : "night_age"}>5</span> إلى <span className={night ? "age" : "night_age"}>10</span> سنوات, السعر <span className={night ? "price_num" : "night_price_num"}>10$</span> , للمزيد من التفاصيل يرجى زيارتنا</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background3">
                            <p><span>6</span> المستوى</p>
                        </div>
                        <div className={night ? "card_price_bottom" : "night_card_price_bottom"}>
                            <p className={night ? "price_para" : "night_price_para"}>هذا المستوى مخصص للأطفال من عمر  <span className={night ? "age" : "night_age"}>5</span> إلى <span className={night ? "age" : "night_age"}>10</span> سنوات, السعر <span className={night ? "price_num" : "night_price_num"}>10$</span> , للمزيد من التفاصيل يرجى زيارتنا</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background1">
                            <p><span>7</span> المستوى</p>
                        </div>
                        <div className={night ? "card_price_bottom" : "night_card_price_bottom"}>
                            <p className={night ? "price_para" : "night_price_para"}>هذا المستوى مخصص للأطفال من عمر  <span className={night ? "age" : "night_age"}>5</span> إلى <span className={night ? "age" : "night_age"}>10</span> سنوات, السعر <span className={night ? "price_num" : "night_price_num"}>10$</span> , للمزيد من التفاصيل يرجى زيارتنا</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background2">
                            <p><span>8</span> المستوى</p>
                        </div>
                        <div className={night ? "card_price_bottom" : "night_card_price_bottom"}>
                            <p className={night ? "price_para" : "night_price_para"}>هذا المستوى مخصص للأطفال من عمر  <span className={night ? "age" : "night_age"}>5</span> إلى <span className={night ? "age" : "night_age"}>10</span> سنوات, السعر <span className={night ? "price_num" : "night_price_num"}>10$</span> , للمزيد من التفاصيل يرجى زيارتنا</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card_price1">
                        <div className="card_price_top background3">
                            <p><span>9</span> المستوى</p>
                        </div>
                        <div className={night ? "card_price_bottom" : "night_card_price_bottom"}>
                            <p className={night ? "price_para" : "night_price_para"}>هذا المستوى مخصص للأطفال من عمر  <span className={night ? "age" : "night_age"}>5</span> إلى <span className={night ? "age" : "night_age"}>10</span> سنوات, السعر <span className={night ? "price_num" : "night_price_num"}>10$</span> , للمزيد من التفاصيل يرجى زيارتنا</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Price;