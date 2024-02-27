import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1280px;
  max-height: 777px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 70px auto;
`;

export const Header = styled.h2`
  font-family: 'Archangelsk';
  font-size: 62px;
  margin-top: 144px;
`;

export const DescriptionText = styled.span`
  margin-top: 25px;
  margin-bottom: 70px;
  font-family: 'Roboto';
  font-size: 18px;
  color: #777777;
  max-width: 925px;
  line-height: 34px;
`;

export const Link = styled.a`
  color: #52bedc;
  text-decoration: none;
  cursor: pointer;
`;

export const Images = styled.section`
  display: grid;
  grid-template-columns: 460px 788px;
  grid-template-rows: 196px 788px;
  gap: 32px;
  max-width: 1280px;
  max-height: 424px;

  & > img {
    grid-column: 1;
    grid-row: 1;
    width: 460px;
    height: 196px;
  }

  & img:first-child {
    grid-row: 2;
  }

  & img:last-child {
    grid-column: 2;
    grid-row: 2;
    width: 788px;
    height: 424px;
  }
`;

export const MainImageWrap = styled.section``;
