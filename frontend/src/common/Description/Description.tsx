import styles from './Description.module.scss';

export const Description = () => {
  return (
    <div className={styles.description__wrapper}>
      <h1 className={styles.description__header}>
        Найт-сити изменит тебя навсегда!
      </h1>
      <span className={styles.description__desc}>
        <a className={styles.description__anchor}>Cyberpunk 2077</a> —
        приключенческая ролевая игра, действие которой происходит в мегаполисе
        Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты
        играешь за V, наёмника в поисках устройства, позволяющего обрести
        бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего
        персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета
        и всё, что тебя окружает.
      </span>
      <section className={styles.description__images}>
        <img src="../public/nightcity3.png" />
        <img src="../public/nightcity2.png" />
        <section className={styles.description__image_main}>
          <img src="../public/nightcity1.png" />
        </section>
      </section>
    </div>
  );
};
