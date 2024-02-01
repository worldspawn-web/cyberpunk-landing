import { CDProjektRed, CyberpunkBanner } from '../../assets';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <section className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <div className={styles.footer__logos}>
          <span>
            <CyberpunkBanner />
          </span>
          <span>
            <CDProjektRed />
          </span>
        </div>
        <div className={styles.footer__links__wrapper}>
          <a className={styles.footer__links}>Лицензия</a>
          <a className={styles.footer__links}>Политика конфиденциальности</a>
        </div>
      </footer>
      <div className={styles.subfooter}>
        <span>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</span>
      </div>
    </section>
  );
};
