import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from 'components/ui/Button';

import { currencySaga } from 'store/main/actions';

import {
  currencyDataSelect,
  currencyErrorSelect,
  currencyLoadingSelect,
} from 'selectors/main';

import styles from './styles.module.css';

export const Currencies: FC = () => {
  const dispatch = useDispatch();

  const currency = useSelector(currencyDataSelect);
  const currencyLoading = useSelector(currencyLoadingSelect);
  const currencyError = useSelector(currencyErrorSelect);

  const [val, setVal] = useState('EUR');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event?.target.value);
  };

  const onBtnClick = () => {
    dispatch(currencySaga(val));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subTitle}>Currencies</h2>

      <div className={styles.content}>
        <div className={styles.resultWrapper}>
          <p>{Object.values(currency.rates)[0] || '?'}</p>
        </div>

        <div>
          <span className={styles.span}>USD/</span>
          <input value={val} onChange={onChange} />
          <Button
            type="button"
            onBtnClick={onBtnClick}
            title="Get currency"
            isLoading={currencyLoading}
          />
        </div>
      </div>

      {currencyError ? (
        <div className={styles.error}>{currencyError.message}</div>
      ) : null}
    </div>
  );
};
