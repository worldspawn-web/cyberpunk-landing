import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';

import type { ImageSliderProps } from './ImageSlider.interface';
import { SwiperImage } from './ImageSliderComponents';

import styles from './ImageSlider.module.scss';

export const ImageSlider = ({ className, ...props }: ImageSliderProps) => {
  return (
    <Swiper {...props} className={classNames(styles.swiper, className)}>
      <SwiperSlide className={styles.swiper__slide}>
        <SwiperImage src="../public/main_banner_1.png" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper__slide}>
        <SwiperImage src="../public/main_banner_2.png" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiper__slide}>
        <SwiperImage src="../public/main_banner_3.png" />
      </SwiperSlide>
    </Swiper>
  );
};
