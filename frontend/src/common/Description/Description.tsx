import {
  Header,
  Wrapper,
  DescriptionText,
  Link,
  Images,
  MainImageWrap,
} from './DescriptionComponents';

export const Description = () => {
  return (
    <Wrapper>
      <Header>Найт-сити изменит тебя навсегда!</Header>
      <DescriptionText>
        <Link>Cyberpunk 2077</Link> — приключенческая ролевая игра, действие
        которой происходит в мегаполисе Найт-Сити, где власть, роскошь и
        модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках
        устройства, позволяющего обрести бессмертие. Ты сможешь менять
        киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый
        мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
      </DescriptionText>
      <Images>
        <img src="../public/nightcity3.png" />
        <img src="../public/nightcity2.png" />
        <MainImageWrap>
          <img src="../public/nightcity1.png" />
        </MainImageWrap>
      </Images>
    </Wrapper>
  );
};
