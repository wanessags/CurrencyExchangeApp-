import "./App.css";

import Header from "./components/Header";
import ConverterCard from "./components/ConverterCard";
import ResultCard from "./components/ResultCard";
import HistoryCard from "./components/HistoryCard";
import HistoryTable from "./components/HistoryTable";

function App() {
  const currencies = ["BRL", "USD", "EUR", "GBP"];

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

  return (
    <main className="app">
      <Header
        title="Currency Exchange App"
        subtitle="Converta e analise moedas de forma simples"
      />

      <ConverterCard
        currencies={currencies}
        fromCurrency="BRL"
        toCurrency="USD"
      />

      <ResultCard
        originalValue="R$ 100,00"
        convertedValue="US$ 18,50"
        exchangeRate="1 BRL = 0,1850 USD"
      />

      <HistoryCard />

      <HistoryTable data={historyData} />
    </main>
  );
}

export default App;
