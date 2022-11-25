import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Button from 'components/ui/Button';

import { currencyHistory } from 'store/main/reducers';

import { currencyHistorySelect } from 'selectors/main';

import { CurrencyHistoryItemType } from 'model/currency';

export const TableRow: FC<{ tableItem: CurrencyHistoryItemType }> = ({
  tableItem,
}) => {
  const dispatch = useDispatch();

  const currencyHistoryStore = useSelector(currencyHistorySelect);

  const deleteHandler = () => {
    const newCurrencyHistory = currencyHistoryStore.filter(
      (el) => el.id !== tableItem.id,
    );

    dispatch(currencyHistory(newCurrencyHistory));
  };
  return (
    <tr>
      <td>{tableItem.num}</td>
      <td>{tableItem.date}</td>
      <td>{tableItem.currencyType}</td>
      <td>{tableItem.currencyData}</td>
      <td>
        <Button type="button" onBtnClick={deleteHandler} title="Delete" />
      </td>
    </tr>
  );
};
