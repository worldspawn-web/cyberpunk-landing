import styles from './Advert.module.scss';
import { ColorPaletteIcon, AwesomeIcon, MotionIcon } from '../../assets';

export const Advert = () => {
  return (
    <section className={styles.advert__wrapper}>
      <img src="../public/section_transition_bty.png" />
      <div className={styles.advert}>
        <div className={styles.advert__grid}>
          <div className={styles.advert__images}>
            <img
              className={styles.advert__image}
              src="../public/hp_monitor.png"
            />
            <img src="../public/hp_collab_cyberpunk.png" />
          </div>
          <div className={styles.advert__description}>
            <h1 className={styles.advert__description__header}>
              Полное погружение вместе с HP
            </h1>
            <p className={styles.advert__description__text}>
              Погрузись в современные экшен-игры с реалистичным изображением с
              помощью монитора с диагональю 23,8 дюйма, созданном для
              отображения максимально насыщенных цветов. Успевай реагировать на
              любые события с временем отклика 1 мс и частотой в 144 Гц!
            </p>
            <table className={styles.advert__features}>
              <tr>
                <td>
                  <span className={styles.advert__features__icon}>
                    <ColorPaletteIcon />
                  </span>
                </td>
                <td className={styles.advert__features__text}>
                  Яркие насыщенные цвета
                </td>
              </tr>
              <tr>
                <td>
                  <span className={styles.advert__features__icon}>
                    <AwesomeIcon />
                  </span>
                </td>
                <td className={styles.advert__features__text}>
                  Кристальная четкость изображения
                </td>
              </tr>
              <tr>
                <td>
                  <span className={styles.advert__features__icon}>
                    <MotionIcon />
                  </span>
                </td>
                <td className={styles.advert__features__text}>
                  Быстрые движения и плавный геймплей
                </td>
              </tr>
            </table>
            <div className={styles.advert__morebtn__wrapper}>
              <a className={styles.advert__morebtn}>Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
