import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const HomeCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={5}
      slidesPerView={3}         // Show three slides at a time
      centeredSlides={true}     // Center the active slide
      loop={true}
      speed={1500}              // Transition speed in ms
      autoplay={{
        delay: 1000,           // Time between transitions in ms
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="w-full h-125 rounded-lg shadow-lg overflow-hidden">
          <img src="public/assets/carouselPhotos/realMadrid.png" alt="Real Madrid" className="object-cover w-full h-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-125 rounded-lg shadow-lg overflow-hidden">
          <img src="public/assets/carouselPhotos/liverpool.jpg" alt="Liverpool" className="object-cover w-full h-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-125 rounded-lg shadow-lg overflow-hidden">
          <img src="public/assets/carouselPhotos/psg.jpg" alt="PSG" className="object-cover w-full h-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-125 rounded-lg shadow-lg overflow-hidden">
          <img src="public/assets/carouselPhotos/bayern.jpg" alt="Bayern" className="object-cover w-full h-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-125 rounded-lg shadow-lg overflow-hidden">
          <img src="public/assets/carouselPhotos/inter.jpg" alt="Inter" className="object-cover w-full h-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-125 rounded-lg shadow-lg overflow-hidden">
          <img src="public/assets/carouselPhotos/lever.jpg" alt="Liverpool" className="object-cover w-full h-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-125 rounded-lg shadow-lg overflow-hidden">
          <img src="public/assets/carouselPhotos/arsenal.jpg" alt="Arsenal" className="object-cover w-full h-full" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-125 rounded-lg shadow-lg overflow-hidden">
          <img src="public/assets/carouselPhotos/barcelona.jpg" alt="Barcelona" className="object-cover w-full h-full" />
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default HomeCarousel;
