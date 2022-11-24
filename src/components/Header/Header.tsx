import React, { FC } from 'react';

import styles from './styles.module.css';

export const Header: FC = () => {
  return (
    <header>
      <h1 className={styles.appHeader}>Saga tests</h1>
    </header>
  );
};
