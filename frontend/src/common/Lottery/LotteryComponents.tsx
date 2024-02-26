import styled from 'styled-components';

export const LotteryChecker = styled.span`
  transition: 0.3s all ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  margin-top: 0;
  background-color: black;
`;

export const BackgroundTransition = styled.img`
  margin-bottom: 0;
`;

export const LotteryWrap = styled.div`
  height: 814px;
  max-width: 1280px;
  margin: 15px auto 0 auto;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubHeader = styled.h2`
  color: white;
  font-size: 62px;
  font-family: 'Archangelsk';
  margin-left: 32px;
`;

export const Description = styled.p`
  margin-top: 25px;
  max-width: 952px;
  line-height: 34px;
  color: white;
  font-size: 18px;
  font-family: 'Roboto';

  & > a {
    color: #52bedc;
  }
`;

export const FormWrap = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: 2;
  grid-template-rows: 1;
`;

export const Form = styled.form`
  max-width: 460px;
  max-height: 383px;
  background-color: transparent;
  grid-row: 1;
  grid-column: 1;
  margin-right: 32px;
`;

export const FormInput = styled.input`
  color: #777777;
  background-color: transparent;
  width: 100%;
  margin-top: 35px;
  margin-top: 35px;
  border: 0;
  border-bottom: 1px solid #777777;
  height: 35px;
`;

export const Filedrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 460px;
  height: 120px;
  background-color: transparent;
  border: 1px dashed #777777;
  margin: 35px 0 35px 0;

  & > p {
    color: white;
    font-family: 'Roboto';
    font-weight: 300;
  }
`;

export const FiledropLabel = styled.p`
  font-size: 18px;
`;

export const FiledropSubLabel = styled.p`
  font-size: 12px;
`;

export const SubmitWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px;
  height: 59px;
  background-color: #f8f200;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.a`
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 700;
`;

export const ConfirmChecker = styled.div`
  display: flex;
  align-items: center;
`;

export const ConfirmLabel = styled.span`
  color: white;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 12px;
  margin-left: 10px;
`;

export const LotteryPrize = styled.div`
  grid-row: 1;
  grid-column: 2;
`;
