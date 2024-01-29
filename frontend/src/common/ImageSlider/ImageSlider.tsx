// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

export const ImageSlider = () => {
  return (
    <Swiper slidesPerView={1} modules={[Autoplay]} autoplay>
      <SwiperSlide>
        <img src="../public/main_banner_1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../public/main_banner_2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../public/main_banner_3.png" />
      </SwiperSlide>
    </Swiper>
  );
};
