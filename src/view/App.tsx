import React, { FC, lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Header } from 'components/Header';
import { Result } from 'components/Result';
import { Loader } from 'components/ui/Loader';
import { Weather } from 'components/Weather';

import { weatherInitSaga } from 'store/main/actions';
import { reset, rndData } from 'store/main/reducers';

import { weatherLoadingSelect } from 'selectors/main';

import styles from './styles.module.css';

// only for example of lazy import ;-)
const LazyButton = lazy(() => import('components/ui/Button'));

export const App: FC = () => {
  const dispatch = useDispatch();

  const weatherLoading = useSelector(weatherLoadingSelect);

  useEffect(() => {
    dispatch(weatherInitSaga());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const onButtonClick = () => {
    const randomNum = Math.random();
    dispatch(rndData(randomNum));
  };

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.section}>
        {weatherLoading ? <Loader height={300} /> : <Weather />}
      </section>

      <section className={styles.section}>
        <Suspense fallback={<p>Loading...</p>}>
          <LazyButton
            type="button"
            title="Button text"
            onBtnClick={onButtonClick}
          />
        </Suspense>
      </section>

      <section className={`${styles.section}`}>
        <Result />
      </section>
    </main>
  );
};
