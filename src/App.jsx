import "./App.css";

import Header from "./components/Header";
import ConverterCard from "./components/ConverterCard";
import ResultCard from "./components/ResultCard";
import HistoryCard from "./components/HistoryCard";
import HistoryTable from "./components/HistoryTable";

function App() {
  return (
    <main className="app">
      <Header />
      <ConverterCard />
      <ResultCard />
      <HistoryCard />
      <HistoryTable />
    </main>
  );
}

export default App;
