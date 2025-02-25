import React from 'react';
import styles from './MyIntro.module.css';

const MyIntro = ({ stack }) => {
  return (
    <div className={styles.container}>
      <span>
        안녕하세요 제이름은 &nbsp;
        <a href='https://github.com/gksktl111' className={styles.name}>
          박민규
        </a>
        &nbsp; 입니다.
      </span>
      <span>{stack} 개발자를 목표로 열심히 공부하고 있습니다!</span>
      <span>취미는 운동, 게임, 위스키모으기 입니다.</span>
    </div>
  );
};

export default MyIntro;
