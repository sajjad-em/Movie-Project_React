import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import '../../style/style.css'

export default function Slider() {
    return (
        <div style={{ marginTop: '10px' }} className="slider w-full relative">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                <SwiperSlide>
                    <div className="image-3d-wrapper flex flex row">
                        <img style={{ width: '100%', height: '400px' }}
                            src="/Images/sinners.jpg"
                            alt="sinners"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg image-3d"
                        />
                        <h1 style={{ color: 'darkred' }}>Sinners</h1>
                        <p style={{ color: '#000' }}>IMDB : 7.8</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="image-3d-wrapper">
                        <img style={{ width: '100%', height: '400px' }}
                            src="/Images/ballerina-movie.jpg"
                            alt="ballerina"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg image-3d"
                        />

                        <h1 style={{ color: 'darkblue' }}>Ballerina</h1>
                        <p style={{ color: '#000' }}>IMDB : 7.3</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image-3d-wrapper">
                        <img style={{ width: '100%', height: '400px' }}
                            src="/Images/final-destination.jpg"
                            alt="final destination"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg image-3d"
                        />
                        <h1 style={{ color: 'red' }}>Final Destination</h1>
                        <p style={{ color: '#000' }}>IMDB : 7</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image-3d-wrapper">
                        <img style={{ width: '100%', height: '400px' }}
                            src="/Images/mission-impossible-7.jpg"
                            alt="mission impossible"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg image-3d"
                        />
                        <h1 style={{ color: '#37675d' }}>Mission Impossible 7</h1>
                        <p style={{ color: '#000' }}>IMDB : 7.5</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="image-3d-wrapper">
                        <img style={{ width: '100%', height: '400px' }}
                            src="/Images/fountain-of-youth.jpg"
                            alt="fountain-of-youth"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg image-3d"
                        />
                        <h1 style={{ color: 'khaki' }}>Fountain of Youth</h1>
                        <p style={{ color: '#000' }}>IMDB : 5.7</p>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="image-3d-wrapper">
                        <img style={{ width: '100%', height: '400px' }}
                            src="/Images/warfare.jpg"
                            alt="warfare"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg image-3d"
                        />
                        <h1 style={{ color: '#000' }}>Warfare</h1>
                        <p style={{ color: '#000' }}>IMDB : 7.3</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
