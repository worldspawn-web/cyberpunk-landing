import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100px;
`;

export const FooterWrap = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const FooterLogo = styled.span`
  margin: 13px 32px 13px 32px;
`;

export const FooterLink = styled.a`
  font-family: 'Roboto';
  font-size: 18px;
  text-decoration: none;
  margin-right: 32px;
`;

export const SubFooter = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Roboto';
  font-size: 12px;
`;
