import { Autoplay } from 'swiper/modules';

import { Wrapper } from './PreviewComponents';
import { ImageSlider, LearnMore } from '..';

export const Preview = () => (
  <Wrapper>
    <ImageSlider slidesPerView={1} modules={[Autoplay]} autoplay />
    <LearnMore />
  </Wrapper>
);
