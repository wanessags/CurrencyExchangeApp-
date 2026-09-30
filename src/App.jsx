import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ConverterCard from "./components/ConverterCard";
import ResultCard from "./components/ResultCard";
import HistoryCard from "./components/HistoryCard";
import HistoryTable from "./components/HistoryTable";

import useCurrencies from "./hooks/useCurrencies";

import { validateConversion, calculateConversion } from "./utils/currency";

import {
  getExchangeRate,
  getHistoricalRates,
} from "./services/currencyService";

function App() {
  const { currencies, loadingCurrencies, currenciesError } = useCurrencies();

  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("BRL");
  const [toCurrency, setToCurrency] = useState("USD");

  const [convertedValue, setConvertedValue] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  const [message, setMessage] = useState("");

  const [historyData, setHistoryData] = useState([]);
  const [historyDays, setHistoryDays] = useState(7);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [historyError, setHistoryError] = useState("");

  useEffect(() => {
    async function loadHistory() {
      if (fromCurrency === toCurrency) {
        setHistoryData([]);
        return;
      }

      try {
        setLoadingHistory(true);
        setHistoryError("");

        const data = await getHistoricalRates(
          fromCurrency,
          toCurrency,
          historyDays,
        );

        setHistoryData(data);
      } catch (error) {
        console.error(error);

        setHistoryData([]);
        setHistoryError("Erro ao carregar histórico de cotações.");
      } finally {
        setLoadingHistory(false);
      }
    }

    loadHistory();
  }, [fromCurrency, toCurrency, historyDays]);

  async function handleConvert() {
    const validation = validateConversion(amount, fromCurrency, toCurrency);

    if (!validation.valid) {
      setMessage(validation.message);
      setConvertedValue(null);
      setExchangeRate(null);
      return;
    }

    try {
      const data = await getExchangeRate(fromCurrency, toCurrency);

      const rate = data.rate;

      const result = calculateConversion(amount, rate);

      setConvertedValue(result);
      setExchangeRate(rate);
      setMessage("");
    } catch (error) {
      console.error(error);

      setMessage("Erro ao buscar cotação.");
      setConvertedValue(null);
      setExchangeRate(null);
    }
  }

  return (
    <main className="app">
      <Header
        title="Currency Exchange App"
        subtitle="Converta e analise moedas de forma simples"
      />

      <ConverterCard
        currencies={currencies}
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        loadingCurrencies={loadingCurrencies}
        onAmountChange={setAmount}
        onFromCurrencyChange={setFromCurrency}
        onToCurrencyChange={setToCurrency}
        onConvert={handleConvert}
      />

      {currenciesError && <p className="error-message">{currenciesError}</p>}

      <ResultCard
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        convertedValue={convertedValue}
        exchangeRate={exchangeRate}
        message={message}
      />

      <HistoryCard
        historyDays={historyDays}
        onHistoryDaysChange={setHistoryDays}
        loading={loadingHistory}
        error={historyError}
        data={historyData}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />

      <HistoryTable
        data={historyData}
        loading={loadingHistory}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </main>
  );
}

export default App;
