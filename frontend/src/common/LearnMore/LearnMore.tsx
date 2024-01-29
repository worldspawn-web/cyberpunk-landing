import styles from './LearnMore.module.scss';

export const LearnMore = () => {
  return (
    <div className={styles.learnmore__container}>
      <h2 className={styles.learnmore__header}>Доступно на всех платформах</h2>
      <div className={styles.learnmore__btn__wrapper}>
        <a className={styles.learnmore__btn}>Узнать больше</a>
      </div>
    </div>
  );
};
