import './Outer_Activity.css'
import trip from './trip2.jpg'
import birthday from './birthday4.jpg'
import { Link } from 'react-router-dom'

function Outer_Activity({ night }) {
    return (
        <>
            <h2 className="activity_title"><i>الأنشطة</i>  </h2>
            <div className='outer_activity' id="activity">
                <div className='trips'>
                    <div className='trip_img'>
                        <img src={trip} />
                    </div>
                    <div className='trip_info'>
                        <p>إحدى الصور المميزة من الأنشطة الخارجية للروضة </p>
                    </div>
                </div>
                <div className='trips'>
                    <div className='trip_img'>
                        <img src={birthday} />
                    </div>
                    <div className='trip_info'>
                        <p>إحدى الصور المميزة من الأنشطة الخارجية للروضة </p>
                    </div>
                </div>
            </div>
            <div className="photo"> <Link className="ser_link" to="/Gallery"><span> هنا </span></Link><p className={night ? "outer_activity_para" : "night_outer_activity_para"}> لرؤية جميع صور النشاطات اضغط </p>  </div>
        </>
    )
}

export default Outer_Activity;