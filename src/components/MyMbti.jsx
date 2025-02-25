import React from 'react';
import styles from './MyMbti.module.css';

const MyMbit = ({ mbti }) => {
  return (
    <div>
      <span className={styles.mbti}>제 MBTI는 {mbti} 입니다</span>
    </div>
  );
};

export default MyMbit;
