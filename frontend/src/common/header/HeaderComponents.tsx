import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1280px;
  max-height: 74px;

  row-gap: 10px;
  margin: 20px auto;

  z-index: 14;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const IconsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  column-gap: 30px;

  @media screen and (min-width: 1024px) {
    column-gap: 40px;
  }
`;
