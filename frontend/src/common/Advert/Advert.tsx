import { ColorPaletteIcon, AwesomeIcon, MotionIcon } from '../../assets';
import {
  AdvertButton,
  AdvertButtonWrapper,
  AdvertDescription,
  AdvertDiv,
  AdvertGrid,
  AdvertHeader,
  AdvertIcon,
  AdvertImage,
  AdvertImagesWrapper,
  AdvertTable,
  AdvertTableCell,
  AdvertTableRow,
  AdvertText,
  AdvertWrapper,
} from './AdvertComponents';

export const Advert = () => {
  return (
    <AdvertWrapper>
      <img src="../public/section_transition_bty.png" />
      <AdvertDiv>
        <AdvertGrid>
          <AdvertImagesWrapper>
            <AdvertImage src="../public/hp_monitor.png" />
            <img src="../public/hp_collab_cyberpunk.png" />
          </AdvertImagesWrapper>
          <AdvertDescription>
            <AdvertHeader>Полное погружение вместе с HP</AdvertHeader>
            <AdvertText>
              Погрузись в современные экшен-игры с реалистичным изображением с
              помощью монитора с диагональю 23,8 дюйма, созданном для
              отображения максимально насыщенных цветов. Успевай реагировать на
              любые события с временем отклика 1 мс и частотой в 144 Гц!
            </AdvertText>
            <AdvertTable>
              <AdvertTableRow>
                <AdvertTableCell>
                  <AdvertIcon>
                    <ColorPaletteIcon />
                  </AdvertIcon>
                </AdvertTableCell>
                <AdvertTableRow>
                  <AdvertText>Яркие насыщенные цвета</AdvertText>
                </AdvertTableRow>
              </AdvertTableRow>
              <AdvertTableRow>
                <AdvertTableCell>
                  <AdvertIcon>
                    <AwesomeIcon />
                  </AdvertIcon>
                </AdvertTableCell>
                <AdvertTableCell>
                  <AdvertText>Кристальная четкость изображения</AdvertText>
                </AdvertTableCell>
              </AdvertTableRow>
              <AdvertTableRow>
                <AdvertTableCell>
                  <AdvertIcon>
                    <MotionIcon />
                  </AdvertIcon>
                </AdvertTableCell>
                <AdvertTableCell>
                  Быстрые движения и плавный геймплей
                </AdvertTableCell>
              </AdvertTableRow>
            </AdvertTable>
            <AdvertButtonWrapper>
              <AdvertButton>Подробнее</AdvertButton>
            </AdvertButtonWrapper>
          </AdvertDescription>
        </AdvertGrid>
      </AdvertDiv>
    </AdvertWrapper>
  );
};
