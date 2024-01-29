import { Header, ImageSlider } from '.';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <section className={styles.section__main}>
        <Header />
        <ImageSlider></ImageSlider>
      </section>
    </>
  );
}

export default App;
