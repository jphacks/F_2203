import React from 'react';
import styles from './style.module.css';

const Loading: React.FC = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default React.memo(Loading);
