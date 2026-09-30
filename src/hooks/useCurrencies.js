import { useEffect, useState } from "react";
import { getCurrencies } from "../services/currencyService";

function useCurrencies() {
  const [currencies, setCurrencies] = useState([]);
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);
  const [currenciesError, setCurrenciesError] = useState("");

  useEffect(() => {
    async function loadCurrencies() {
      try {
        setLoadingCurrencies(true);
        setCurrenciesError("");

        const data = await getCurrencies();

        setCurrencies(data);
      } catch (error) {
        console.error(error);

        setCurrenciesError("Erro ao carregar moedas.");
      } finally {
        setLoadingCurrencies(false);
      }
    }

    loadCurrencies();
  }, []);

  return {
    currencies,
    loadingCurrencies,
    currenciesError,
  };
}

export default useCurrencies;
