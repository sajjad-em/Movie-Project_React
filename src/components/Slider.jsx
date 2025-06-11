import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Slider() {
    return (
        <div className="slider w-full">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },     // موبایل
                    640: { slidesPerView: 2 },     // تبلت کوچک
                    1024: { slidesPerView: 3 },    // لپ‌تاپ و بالاتر
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img style={{width:'100%' , height:'400px'}}
                        src="/Images/sinners.jpg"
                        alt="sinners"
                        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img style={{width:'100%' , height:'400px'}}
                        src="/Images/ballerina-movie.jpg"
                        alt="ballerina"
                        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img style={{width:'100%' , height:'400px'}}
                        src="/Images/final-destination.jpg"
                        alt="final destination"
                        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img style={{width:'100%' , height:'400px'}}
                        src="/Images/mission-impossible-7.jpg"
                        alt="mission impossible"
                        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
