import { Description, Header, ImageSlider, LearnMore, Lottery } from '.';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <section className={styles.section__main}>
        <Header />
        <ImageSlider />
        <LearnMore />
      </section>
      <section className={styles.section__description}>
        <Description />
      </section>
      <section className={styles.section__lottery}>
        <Lottery />
      </section>
    </>
  );
}

export default App;
