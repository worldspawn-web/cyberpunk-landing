import {
  CyberpunkBanner,
  YoutubeIcon,
  VkIcon,
  FacebookIcon,
  TwitterIcon,
  TwitchIcon,
  InstagramIcon,
} from '../../assets';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <div className={styles.header__banner__wrapper}>
        <CyberpunkBanner />
        <section className={styles.header__icons__wrapper}>
          <YoutubeIcon />
          <VkIcon />
          <FacebookIcon />
          <TwitterIcon />
          <TwitchIcon />
          <InstagramIcon />
        </section>
      </div>
    </>
  );
};
