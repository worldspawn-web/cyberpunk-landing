import styled from 'styled-components';

export const AdvertWrapper = styled.section`
  width: 100vw;
  height: 746px;
  background-color: #f8f200;
`;

export const AdvertImage = styled.img`
  margin-bottom: 26px;
`;

export const AdvertDiv = styled.div`
  max-width: 1280px;
  height: 746px;
  margin: 0 auto;
`;

export const AdvertGrid = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 624px 624px;
`;

export const AdvertImagesWrapper = styled.div`
  max-width: 430px;
  grid-row: 1;
  grid-column: 1;
  margin: 0 32px 70px 0;
`;

export const AdvertDescription = styled.div`
  grid-row: 1;
  grid-column: 2;
  margin-left: 32px;
`;

export const AdvertHeader = styled.h2`
  max-width: 624px;
  font-size: 62px;
  font-family: 'Archangelsk';
  margin-bottom: 25px;
`;

export const AdvertText = styled.p`
  max-width: 624px;
  max-height: 125px;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 34px;
`;

export const AdvertTable = styled.table`
  display: flex;
  flex-direction: column;
  margin: 25px 0 40px 0;
`;

export const AdvertTableRow = styled.tr``;

export const AdvertTableCell = styled.td``;

export const AdvertIcon = styled.span`
  margin-right: 10px;
`;

export const AdvertButtonWrapper = styled.div`
  width: 194px;
  height: 59px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdvertButton = styled.a`
  font-family: 'Roboto';
  font-weight: bold;
  color: #f8f200;
`;
