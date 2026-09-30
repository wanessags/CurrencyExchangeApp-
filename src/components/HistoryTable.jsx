function HistoryTable({ data }) {
  return (
    <section className="card">
      <div className="section-header">
        <h2>Dados Históricos</h2>

        <div className="table-actions">
          <input className="search-input" type="text" placeholder="Buscar..." />

          <select className="sort-select" defaultValue="date">
            <option value="date">Ordenar por data</option>

            <option value="currency">Ordenar por moeda</option>

            <option value="rate">Ordenar por cotação</option>
          </select>
        </div>
      </div>

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
            {data.map((item) => (
              <tr key={`${item.date}-${item.currency}`}>
                <td>{item.date}</td>
                <td>{item.currency}</td>
                <td>{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="export-button">Exportar CSV</button>
    </section>
  );
}

export default HistoryTable;
