import React from 'react';
import styles from './MyName.module.css';

const MyName = ({ name }) => {
  return (
    <div>
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default MyName;
