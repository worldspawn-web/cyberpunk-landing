import { Autoplay } from 'swiper/modules';
import { ImageSlider, LearnMore } from '..';
import styles from './Preview.module.scss';

export const Preview = () => (
  <div className={styles.preview__wrapper}>
    <ImageSlider slidesPerView={1} modules={[Autoplay]} autoplay />
    <LearnMore />
  </div>
);
