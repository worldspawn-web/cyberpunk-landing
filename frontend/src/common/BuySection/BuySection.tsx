import styles from './BuySection.module.scss';
import {
  DiskIcon,
  CollectionsIcon,
  PCLogo,
  XboxOneLogo,
  StadiaLogo,
  PS4Logo,
  ActivationCodeIcon,
} from '../../assets';

export const BuySection = () => {
  return (
    <section className={styles.buysection__wrapper}>
      <div className={styles.buysection__grid}>
        <section className={styles.buysection__left}>
          <img src="../public/cyberpunk_disc.png" />
        </section>
        <section className={styles.buysection__right}>
          <h1 className={styles.buysection__header}>
            Купить игру Cyberpunk 2077
          </h1>
          <h2 className={styles.buysection__subheader}>В комплект входит:</h2>
          <table>
            <tr className={styles.buysection__table__row}>
              <td className={styles.buysection__icon}>
                <DiskIcon />
              </td>
              <td className={styles.buysection__features}>
                Футляр с игровыми дисками
              </td>
            </tr>
            <tr className={styles.buysection__table__row}>
              <td className={styles.buysection__icon}>
                <ActivationCodeIcon />
              </td>
              <td className={styles.buysection__features}>
                Футляр с кодом для загрузки игры и дисками (PC)
              </td>
            </tr>
            <tr className={styles.buysection__table__row}>
              <td className={styles.buysection__icon}>
                <CollectionsIcon />
              </td>
              <td className={styles.buysection__features}>
                Справочник с информацией об игровом мире
              </td>
            </tr>
          </table>

          <section className={styles.buysection__platform}>
            <h2 className={styles.buysection__platform__header}>
              Выберите платформу:
            </h2>
            <table>
              <tr className={styles.buysection__platform__row}>
                <td className={styles.buysection__platform__logo}>
                  <a className={styles.buysection__platform__link}>
                    <PCLogo />
                  </a>
                </td>
                <td className={styles.buysection__platform__logo}>
                  <a className={styles.buysection__platform__link}>
                    <XboxOneLogo />
                  </a>
                </td>
              </tr>
              <tr className={styles.buysection__platform__row}>
                <td className={styles.buysection__platform__logo}>
                  <a className={styles.buysection__platform__link}>
                    <StadiaLogo />
                  </a>
                </td>
                <td className={styles.buysection__platform__logo}>
                  <a className={styles.buysection__platform__link}>
                    <PS4Logo />
                  </a>
                </td>
              </tr>
            </table>
          </section>
        </section>
      </div>
    </section>
  );
};
