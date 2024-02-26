import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: 717px;
  margin: 0 auto;
  background-color: black;
`;

export const Grid = styled.div`
  width: 100vw;
  height: 717px;
  margin: 0 auto;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  display: grid;
`;

export const GridLeft = styled.div`
  grid-row: 1;
  grid-column: 1;
`;

export const GridRight = styled.div`
  color: white;
  grid-row: 1;
  grid-column: 2;
  margin-left: 32px;
`;

export const MainHeader = styled.h1`
  font-size: 62px;
  font-family: 'Archangelsk';
  max-width: 624px;
  margin: 70px 0 25px 0;
`;

export const SubHeader = styled.h2`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #52bedc;
  margin-bottom: 15px;
`;

export const Table = styled.table``;
export const TableRow = styled.td``;
export const TableCell = styled.td``;

export const Platform = styled.section`
  max-width: 319px;
  max-height: 190px;
`;

export const PlatformHeader = styled.h2`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 24px;
  color: #52bedc;
  max-width: 255px;
  max-height: 29px;
  margin-bottom: 25px;
  margin-top: 70px;
`;

export const PlatformRow = styled.tr`
  display: flex;
  align-items: center;
  margin-bottom: 56px;
`;

export const PlatformCell = styled.td`
  margin-right: 79px;
`;

export const PlatformLink = styled.a`
  transition: 0.3s all ease;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0 5px 15px #52bedc);
  }
`;
