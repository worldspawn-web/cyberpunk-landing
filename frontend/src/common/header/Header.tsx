import styles from './Header.module.scss';
import {
  CyberpunkBanner,
  YoutubeIcon,
  FacebookIcon,
  TwitchIcon,
  InstagramIcon,
  VKIcon,
} from '../../assets';
import { TwitterIcon } from '../../assets/icons/TwitterIcon';

export const Header = () => {
  return (
    <>
      <div className={styles.header__banner__wrapper}>
        <CyberpunkBanner />
        <section className={styles.header__icons__wrapper}>
          <YoutubeIcon />
          <VKIcon />
          <FacebookIcon />
          <TwitterIcon />
          <TwitchIcon />
          <InstagramIcon />
        </section>
      </div>
    </>
  );
};
