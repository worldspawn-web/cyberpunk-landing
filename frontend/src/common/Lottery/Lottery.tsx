import { useState } from 'react';

import { CheckerOnIcon, CheckerOffIcon, LotteryIcon } from '../../assets';
import {
  BackgroundTransition,
  HeaderWrap,
  LotteryChecker,
  LotteryWrap,
  SubHeader,
  Wrapper,
  Description,
  FormWrap,
  Form,
  FormInput,
  Filedrop,
  FiledropLabel,
  FiledropSubLabel,
  SubmitWrap,
  SubmitButton,
  ConfirmChecker,
  ConfirmLabel,
  LotteryPrize,
} from './LotteryComponents';

import './Lottery.scss';

export const Lottery = () => {
  const [isChecked, setChecked] = useState(false);

  const CheckerInput = () => {
    const icon = isChecked ? <CheckerOnIcon /> : <CheckerOffIcon />;
    return (
      <LotteryChecker onClick={() => setChecked(!isChecked)}>
        {icon}
      </LotteryChecker>
    );
  };

  return (
    <Wrapper>
      <BackgroundTransition src="../public/section_transition_wtb.png" />
      <LotteryWrap>
        <HeaderWrap>
          <LotteryIcon />
          <SubHeader>Играй и выигрывай!</SubHeader>
        </HeaderWrap>
        <Description>
          Играй в <a>Cyberpunk 2077</a> и получи возможность выиграть консоль{' '}
          <a>Xbox Series X</a> или <a>Sony PlayStation 5</a>! Заполни форму ниже
          и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1
          февраля. Удачи! ;)
        </Description>

        <FormWrap>
          <Form>
            <FormInput type="text" placeholder="Как тебя зовут?"></FormInput>
            <FormInput type="text" placeholder="Твой e-mail"></FormInput>

            <Filedrop>
              <FiledropLabel>Прикрепить скриншот</FiledropLabel>
              <FiledropSubLabel>.png / .jpg / .pdf</FiledropSubLabel>
            </Filedrop>

            <SubmitWrap>
              <SubmitButton>Отправить</SubmitButton>
            </SubmitWrap>

            <ConfirmChecker>
              <CheckerInput />
              <ConfirmLabel>
                Согласен на обработку персональных данных
              </ConfirmLabel>
            </ConfirmChecker>
          </Form>

          <LotteryPrize>
            <img src="../public/lottery_prize.png" />
          </LotteryPrize>
        </FormWrap>
      </LotteryWrap>
    </Wrapper>
  );
};
