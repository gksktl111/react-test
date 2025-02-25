import styles from './App.module.css';
import MyName from './components/MyName';
import LikeImg from './components/LikeImg';
import likeImg from './asset/profile.png';
import MyIntro from './components/MyIntro';
import MyMbit from './components/MyMbti';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <section className={styles.card__left}>
          <LikeImg img={likeImg} />
          <MyName name='박민규' />
        </section>

        <section className={styles.card__right}>
          <MyIntro stack='풀스택' />
          <MyMbit mbti='INFJ' />
        </section>
      </div>
    </div>
  );
}

export default App;
