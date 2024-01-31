import { useState } from 'react';
import { CheckerOff, CheckerOn, LotteryIcon } from '../../assets';
import styles from './Lottery.module.scss';

export const Lottery = () => {
  const [isChecked, setChecked] = useState(false);

  const CheckerInput = () => {
    const icon = isChecked ? <CheckerOn /> : <CheckerOff />;
    return (
      <span
        className={styles.lottery__checker}
        onClick={() => setChecked(!isChecked)}
      >
        {icon}
      </span>
    );
  };

  return (
    <>
      <div className={styles.lottery__wrapper}>
        <img
          src="../public/section_transition_wtb.png"
          className={styles.lottery__transition}
        />
        <div className={styles.lottery}>
          <div className={styles.lottery__header__wrapper}>
            <LotteryIcon />
            <h1 className={styles.lottery__header}>Играй и выигрывай!</h1>
          </div>
          <div className={styles.lottery__description__wrapper}>
            <p className={styles.lottery__description}>
              Играй в <a>Cyberpunk 2077</a> и получи возможность выиграть
              консоль <a>Xbox Series X</a> или <a>Sony PlayStation 5</a>!
              Заполни форму ниже и приложи скриншот о покупке игры. Итоги
              розыгрыша будут подведены 1 февраля. Удачи! ;)
            </p>
          </div>
          <div className={styles.lottery__form__wrapper}>
            <div className={styles.lottery__form}>
              <form>
                <input
                  className={styles.lottery__form__input}
                  type="text"
                  placeholder="Как тебя зовут?"
                ></input>
                <input
                  className={styles.lottery__form__input}
                  type="text"
                  placeholder="Твой e-mail"
                ></input>
              </form>

              <div className={styles.lottery__filedrop}>
                <p className={styles.lottery__filedrop__header}>
                  Прикрепить скриншот
                </p>
                <p className={styles.lottery__filedrop__subheader}>
                  .png / .jpg / .pdf
                </p>
              </div>
              <div className={styles.lottery__submitbtn__wrapper}>
                <a className={styles.lottery__submitbtn}>Отправить</a>
              </div>
              <div className={styles.lottery__confirm}>
                <CheckerInput />
                <span className={styles.lottery__confirm__text}>
                  Согласен на обработку персональных данных
                </span>
              </div>
            </div>
            <div className={styles.lottery__prize}>
              <img src="../public/lottery_prize.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
