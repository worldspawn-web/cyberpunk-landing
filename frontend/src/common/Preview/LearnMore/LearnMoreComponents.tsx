import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -50px;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px 38px;
  row-gap: 24px;

  background-color: yellow;

  z-index: 999;

  font-size: 30px;

  @media screen and (min-width: 1024px) {
    right: 36px;
    bottom: 0;

    max-width: 624px;

    align-items: flex-start;

    font-size: 62px;
  }
`;

export const LearnMoreButton = styled.a`
  width: 100%;

  padding: 20px 50px;

  color: yellow;
  background-color: black;

  text-align: center;

  font-size: 20px;

  @media screen and (min-width: 1024px) {
    width: fit-content;

    font-size: 24px;
  }
`;
