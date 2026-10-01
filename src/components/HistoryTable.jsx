import { useState } from "react";

import { formatDate, formatRate } from "../utils/currency";

function HistoryTable({ data, loading, toCurrency }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const safeData = Array.isArray(data) ? data : [];

  // Filtra os dados de acordo com a busca
  const filteredData = safeData.filter((item) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    const formattedDate = formatDate(item.date).toLowerCase();

    const originalDate = item.date.toLowerCase();

    const currency = toCurrency.toLowerCase();

    return (
      formattedDate.includes(search) ||
      originalDate.includes(search) ||
      currency.includes(search)
    );
  });

  // Ordena os dados filtrados
  const sortedData = [...filteredData].sort((itemA, itemB) => {
    if (sortBy === "rate") {
      return Number(itemB.rate) - Number(itemA.rate);
    }

    return new Date(itemB.date) - new Date(itemA.date);
  });

  // Exporta os dados exibidos na tabela para CSV
  function handleExportCSV() {
    if (sortedData.length === 0) {
      return;
    }

    const header = ["Data", "Moeda", "Cotação"];

    const rows = sortedData.map((item) => [
      formatDate(item.date),
      toCurrency,
      formatRate(item.rate),
    ]);

    const csvContent = [header, ...rows].map((row) => row.join(";")).join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `historico-${toCurrency}.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  return (
    <section className="card historical-data-card">
      <div className="section-header table-header">
        <h2>Dados Históricos</h2>

        <div className="table-actions">
          <input
            className="search-input"
            type="text"
            placeholder="Buscar por data ou moeda..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            className="sort-select"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="date">Ordenar por data</option>

            <option value="rate">Ordenar por cotação</option>
          </select>
        </div>
      </div>

      {loading && (
        <p className="table-message">Carregando dados históricos...</p>
      )}

      {!loading && safeData.length === 0 && (
        <p className="table-message">Não há dados históricos disponíveis.</p>
      )}

      {!loading && safeData.length > 0 && sortedData.length === 0 && (
        <p className="table-message">
          Nenhum resultado encontrado para a busca.
        </p>
      )}

      {!loading && sortedData.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Moeda</th>
                <th>Cotação</th>
              </tr>
            </thead>

            <tbody>
              {sortedData.map((item, index) => (
                <tr key={`${item.date}-${index}`}>
                  <td>{formatDate(item.date)}</td>

                  <td>{toCurrency}</td>

                  <td>{formatRate(item.rate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        className="export-button"
        type="button"
        onClick={handleExportCSV}
        disabled={sortedData.length === 0}
      >
        ↓ Exportar CSV
      </button>
    </section>
  );
}

export default HistoryTable;
