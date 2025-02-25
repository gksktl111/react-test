import React from 'react';
import styles from './LikeImg.module.css';
const LikeImg = ({ img }) => {
  return (
    <div className={styles.img__container}>
      <img src={img} alt='좋아요 이미지' />
    </div>
  );
};

export default LikeImg;
