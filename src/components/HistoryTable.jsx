function HistoryTable({ data, loading, fromCurrency, toCurrency }) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Dados Históricos</h2>

        <div className="table-actions">
          <input className="search-input" type="text" placeholder="Buscar..." />

          <select className="sort-select" defaultValue="date">
            <option value="date">Ordenar por data</option>

            <option value="rate">Ordenar por cotação</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p>Carregando dados...</p>
      ) : data.length === 0 ? (
        <p>Não há dados históricos disponíveis.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>De</th>
                <th>Para</th>
                <th>Cotação</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={`${item.date}-${item.base}-${item.quote}`}>
                  <td>{item.date}</td>
                  <td>{fromCurrency}</td>
                  <td>{toCurrency}</td>
                  <td>{Number(item.rate).toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button className="export-button">Exportar CSV</button>
    </section>
  );
}

export default HistoryTable;
