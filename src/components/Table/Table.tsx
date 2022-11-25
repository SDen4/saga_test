import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { TableRow } from 'components/TableRow';

import { currencyHistorySelect } from 'selectors/main';

import styles from './styles.module.css';

export const Table: FC = () => {
  const currencyHistory = useSelector(currencyHistorySelect);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <td>#</td>
          <td>Date</td>
          <td>Currency</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        {currencyHistory.map((el) => (
          <TableRow tableItem={el} key={el.id} />
        ))}
      </tbody>
    </table>
  );
};
