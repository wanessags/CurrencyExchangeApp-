import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ConverterCard from "./components/ConverterCard";
import ResultCard from "./components/ResultCard";
import HistoryCard from "./components/HistoryCard";
import HistoryTable from "./components/HistoryTable";

import { validateConversion, calculateConversion } from "./utils/currency";

import { getCurrencies, getExchangeRate } from "./services/currencyService";

function App() {
  const [currencies, setCurrencies] = useState([]);

  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("BRL");
  const [toCurrency, setToCurrency] = useState("USD");

  const [convertedValue, setConvertedValue] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  const [message, setMessage] = useState("");
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);

  const historyData = [
    {
      date: "01/10/2026",
      currency: "USD",
      rate: "5,40",
    },
    {
      date: "30/09/2026",
      currency: "USD",
      rate: "5,38",
    },
    {
      date: "29/09/2026",
      currency: "USD",
      rate: "5,35",
    },
  ];

  useEffect(() => {
    async function loadCurrencies() {
      try {
        setLoadingCurrencies(true);

        const data = await getCurrencies();

        setCurrencies(data);
      } catch (error) {
        console.error(error);

        setMessage("Erro ao carregar moedas.");
      } finally {
        setLoadingCurrencies(false);
      }
    }

    loadCurrencies();
  }, []);

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

      <ResultCard
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        convertedValue={convertedValue}
        exchangeRate={exchangeRate}
        message={message}
      />

      <HistoryCard />

      <HistoryTable data={historyData} />
    </main>
  );
}

export default App;
