import React from 'react';

import { Flex } from '../Flex';

import styles from './styles.module.css';

export const Loader: React.FC<{ height?: number }> = ({ height }) => {
  return (
    <Flex className={styles.loaderWrapper} style={{ height }}>
      <div className={styles.ldsDefault}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Flex>
  );
};
