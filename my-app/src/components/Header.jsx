import React from 'react'
import image1 from '../images/header-slide-1.jpg'
import image2 from '../images/header-slide-2.jpg'
import image3 from '../images/header-slide-3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const Header = () => {
    return (
        <header className="header py-7 vh-100 ">
            <div className="container">
                <div className="row mb-5 text-center">
                    <div className="col-lg-12 text-container">
                        <h1 className="display-2 text-white mt-3">
                            Explore Our Training and Seminar Videos
                        </h1>
                        <p className="lead text-white w-75 m-auto mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quae cum, sapiente perferendis vero
                            illum porro repellendus sunt, saepe magnam consequatur quaerat molestias tempore vel voluptas consequuntur
                            quam, incidunt maxime?
                        </p>
                        <a href="#register" className="btn btn-primary text-uppercase">
                            Register
                        </a>
                        <a href="#discover" className="btn btn-outline-light text-uppercase">
                            Discover
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Image slider  */}
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide><img src={image1} alt="1" className=' d-block w-100 rounded-5' /></SwiperSlide>
                                <SwiperSlide><img src={image2} alt="2" className=' d-block w-100 rounded-5' /></SwiperSlide>
                                <SwiperSlide><img src={image3} alt="3" className=' d-block w-100 rounded-5' /></SwiperSlide>
                            </Swiper>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
