import { useState, useEffect } from 'react';

const useCurrencyInfo = (currency) => {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`,
        );

        const { data, keyslist: optionsList } = await dataConversion(response);

        setCurrencyData({ optionsList, data });
      } catch (error) {
        console.error('Error while fetching Data ', error);
      }
    };

    const dataConversion = async (apiData) => {
      try {
        const data = (await apiData.json())[currency];

        const keyslist = Object.keys(data).map((key) => ({
          value: key,
          label: key.toUpperCase(),
        }));

        return { data, keyslist };
      } catch (error) {
        console.error('Error while Data Conversion', error);
      }
    };
    fetchCurrencyData();
  }, [currency]);

  return currencyData;
};

export default useCurrencyInfo;
