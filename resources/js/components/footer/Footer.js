import './Footer.css'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function Footer({night}) {
    return (
        <section className={night? "footer" :"night_footer"}>

            <div className="box-container">
                <div className="box">
                    <h3><i>حول الروضة</i></h3>
                    <p className={night? 'aboutUs_para': 'night_aboutUs_para'}>نعرض لكم مركز رياض الاطفال بما يقدمه من خدمات التواصل والمتابعة للأطفال والأنشطة حيث يمكنكم مشاهدة كل ما هو جديد عن رياض الاطفال من خلال هذا الموقع</p>
                </div>

                <div class="box">
                    <h3><i>روابط سريعة</i></h3>
                    <HashLink smooth to="#cover" className={night? 'link_footer': 'night_link_footer'}>الرئيسية </HashLink>
                    <HashLink smooth to="#services" className={night? 'link_footer': 'night_link_footer'}>الخدمات </HashLink>
                    <HashLink smooth to="#activity" className={night? 'link_footer': 'night_link_footer'}>الأنشطة </HashLink>
                    <HashLink smooth to="#our_prices" className={night? 'link_footer': 'night_link_footer'}>الأسعار </HashLink>
                </div>
                <div class="box">
                    <h3><i>الدوام</i></h3>
                    <p className={night? 'link_footer': 'night_link_footer'}> أيام الدوام أسبوعياً : <span>5</span> <i className="fas fa-calendar"></i> </p>
                    <p className={night? 'link_footer': 'night_link_footer'}> ساعات الدوام يومياً  : <span>6</span> <i className="fas fa-clock"></i> </p>
                </div>

                <div className="box">
                    <h3><i>الدعم</i></h3>
                    <p className={night? 'link_footer': 'night_link_footer'}>دمشق في سوريا <i className="fas fa-map-marker-alt"></i> </p>
                    <p className={night? 'link_footer': 'night_link_footer'}>
                        +9630949376648 <i className="fas fa-phone"></i></p>
                    <p className={night? 'link_footer': 'night_link_footer'}>KFS@gmail.com <i className="fas fa-envelope"></i></p>
                </div>


            </div>

        </section>
    )
}

export default Footer;
