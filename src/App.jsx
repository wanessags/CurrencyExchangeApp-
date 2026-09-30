import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ConverterCard from "./components/ConverterCard";
import ResultCard from "./components/ResultCard";
import HistoryCard from "./components/HistoryCard";
import HistoryTable from "./components/HistoryTable";

function App() {
  const currencies = ["BRL", "USD", "EUR", "GBP"];

  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("BRL");
  const [toCurrency, setToCurrency] = useState("USD");

  const [convertedValue, setConvertedValue] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [message, setMessage] = useState("");

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

  const mockRates = {
    BRL: {
      USD: 0.185,
      EUR: 0.158,
      GBP: 0.137,
    },

    USD: {
      BRL: 5.4,
      EUR: 0.85,
      GBP: 0.74,
    },

    EUR: {
      BRL: 6.32,
      USD: 1.17,
      GBP: 0.86,
    },

    GBP: {
      BRL: 7.3,
      USD: 1.35,
      EUR: 1.16,
    },
  };

  function handleConvert() {
    const numericAmount = Number(amount);

    if (!amount || numericAmount <= 0) {
      setMessage("Digite um valor maior que zero.");
      setConvertedValue(null);
      setExchangeRate(null);
      return;
    }

    if (fromCurrency === toCurrency) {
      setMessage("Escolha moedas diferentes.");
      setConvertedValue(null);
      setExchangeRate(null);
      return;
    }

    const rate = mockRates[fromCurrency][toCurrency];

    const result = numericAmount * rate;

    setConvertedValue(result);
    setExchangeRate(rate);
    setMessage("");
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
