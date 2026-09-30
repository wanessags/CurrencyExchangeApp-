import { formatDate, formatRate } from "../utils/currency";

function HistoryTable({ data, loading, toCurrency }) {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <section className="card historical-data-card">
      <div className="section-header table-header">
        <h2>Dados Históricos</h2>

        <div className="table-actions">
          <input
            className="search-input"
            type="text"
            placeholder="Buscar por data ou moeda..."
          />

          <select className="sort-select" defaultValue="date">
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

      {!loading && safeData.length > 0 && (
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
              {safeData.map((item, index) => (
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

      <button className="export-button" type="button">
        ↓ Exportar CSV
      </button>
    </section>
  );
}

export default HistoryTable;
