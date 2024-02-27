import { CyberpunkBanner, CDProjektRed } from '../../assets';
import {
  Wrapper,
  FooterWrap,
  FooterLogo,
  FooterLink,
  SubFooter,
} from './FooterComponents';

export const Footer = () => {
  return (
    <Wrapper>
      <FooterWrap>
        <FooterLogo>
          <CyberpunkBanner />
        </FooterLogo>
        <FooterLogo>
          <CDProjektRed />
        </FooterLogo>
        <FooterLink>Лицензия</FooterLink>
        <FooterLink>Политика конфиденциальности</FooterLink>
      </FooterWrap>
      <SubFooter>
        <span>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</span>
      </SubFooter>
    </Wrapper>
  );
};
