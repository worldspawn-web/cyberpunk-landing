import {
  CyberpunkBanner,
  YoutubeIcon,
  FacebookIcon,
  TwitchIcon,
  InstagramIcon,
  VKIcon,
  TwitterIcon,
} from '../../assets';
import { IconsWrapper, Wrapper } from './HeaderComponents';

export const Header = () => {
  return (
    <Wrapper>
      <CyberpunkBanner />
      <IconsWrapper>
        <YoutubeIcon />
        <VKIcon />
        <FacebookIcon />
        <TwitterIcon />
        <TwitchIcon />
        <InstagramIcon />
      </IconsWrapper>
    </Wrapper>
  );
};
