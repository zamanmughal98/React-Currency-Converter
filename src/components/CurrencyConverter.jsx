import '../styles/CurrencyConverter.css';

import { useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRetweet,
  faMoneyBillTransfer,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons';

import CustomTile from './CustomTile';
import useCurrencyInfo from '../hooks/useCurrencyInfo';

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toAmount, setToAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState('pkr');
  const [disableSwap, setDisableSwap] = useState(false);

  const { optionsList, data } = useCurrencyInfo(fromCurrency);

  const conversionHandler = useCallback(() => {
    setToAmount(parseFloat(fromAmount * data[toCurrency]));
  }, [fromAmount, toCurrency, setToAmount, data]);

  const SwapHandler = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  useEffect(() => {
    document.title = 'Currency Conversion';
  }, []);

  useEffect(() => {
    setDisableSwap(!fromCurrency || !toCurrency || fromCurrency === toCurrency);
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (data && data[toCurrency]) conversionHandler();
  }, [conversionHandler, fromAmount, fromCurrency, toCurrency, data]);

  return (
    <section className="CurrencyConverter_section">
      <CustomTile
        title={'From'}
        dataList={optionsList}
        currencyValue={fromAmount}
        onCurrencyChange={setFromAmount}
        selectionValue={fromCurrency}
        onSelectionChange={setFromCurrency}
        readOnly={false}
      />

      <button
        className="Swapbutton"
        onClick={SwapHandler}
        disabled={disableSwap}>
        {disableSwap ? (
          <>
            Swap <FontAwesomeIcon icon={faSkullCrossbones} />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faRetweet} /> Swap
          </>
        )}
      </button>

      <CustomTile
        title={'To'}
        dataList={optionsList}
        currencyValue={toAmount}
        onCurrencyChange={setToAmount}
        selectionValue={toCurrency}
        onSelectionChange={setToCurrency}
        readOnly={true}
      />

      <br />

      <button className="convertbutton" onClick={conversionHandler}>
        <FontAwesomeIcon icon={faMoneyBillTransfer} /> Convert{' '}
        {fromCurrency ? fromCurrency.toUpperCase() : '??'} to{' '}
        {toCurrency ? toCurrency.toUpperCase() : '??'}
      </button>
    </section>
  );
};

export default CurrencyConverter;
