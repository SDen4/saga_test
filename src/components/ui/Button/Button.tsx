import React, { FC } from 'react';

import styles from './styles.module.css';

interface IProps {
  type: 'button' | 'reset' | 'submit';
  onBtnClick: () => void;
  title: string;
  isLoading?: boolean;
}

const Button: FC<IProps> = ({ type, onBtnClick, title, isLoading }) => {
  return (
    <button className={styles.button} type={type} onClick={onBtnClick}>
      {isLoading ? 'loading...' : title}
    </button>
  );
};

export default Button;
