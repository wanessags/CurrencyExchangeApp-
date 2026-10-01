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
  const [isConverting, setIsConverting] = useState(false);

  const [historyData, setHistoryData] = useState([]);
  const [historyDays, setHistoryDays] = useState(7);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [historyError, setHistoryError] = useState("");

  useEffect(() => {
    async function loadHistory() {
      if (!fromCurrency || !toCurrency || fromCurrency === toCurrency) {
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

        setHistoryData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao carregar histórico:", error);

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
      setIsConverting(true);
      setMessage("");

      const data = await getExchangeRate(fromCurrency, toCurrency);

      const rate = Number(data.rate);

      if (!Number.isFinite(rate)) {
        throw new Error("Cotação inválida recebida da API");
      }

      const result = calculateConversion(amount, rate);

      setConvertedValue(result);
      setExchangeRate(rate);
    } catch (error) {
      console.error("Erro ao converter:", error);

      setMessage("Não foi possível buscar a cotação. Tente novamente.");

      setConvertedValue(null);
      setExchangeRate(null);
    } finally {
      setIsConverting(false);
    }
  }

  return (
    <main className="app">
      <Header />

      <ConverterCard
        currencies={currencies}
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        loadingCurrencies={loadingCurrencies}
        isConverting={isConverting}
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

      <footer className="footer">Currency Exchange App</footer>
    </main>
  );
}

export default App;
