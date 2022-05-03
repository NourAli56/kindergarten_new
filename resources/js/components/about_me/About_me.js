import React from "react";
import './About_me.css'
import Image from './aboutme11.svg'

function About_me({ night }) {
    return (
        <div className={night? "about" : "night_about"} id="about">
            <div className="all">
                <img src={Image} />
                <div className="both">
                    <div>
                    <h1 className="about_title"><i>مرحباً بكم في أفضل روضة</i></h1>
                    <p className={night? "about_para" : "night_about_para"}>نعرض لكم مركز رياض الاطفال بما يقدمه من خدمات التواصل والمتابعة للأطفال والأنشطة حيث يمكنكم مشاهدة كل ما هو جديد عن رياض الاطفال من خلال هذا الموقع, مؤسس الروضة : <strong>فادي العياص</strong>, ويوجد لدينا نخبة من الكادر التعليمي: <strong>نور العلي ، رهان العلي .....</strong>  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_me;