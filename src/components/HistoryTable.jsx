function HistoryTable() {
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
            <tr>
              <td>01/10/2026</td>
              <td>USD</td>
              <td>5,40</td>
            </tr>

            <tr>
              <td>30/09/2026</td>
              <td>USD</td>
              <td>5,38</td>
            </tr>

            <tr>
              <td>29/09/2026</td>
              <td>USD</td>
              <td>5,35</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="export-button">Exportar CSV</button>
    </section>
  );
}

export default HistoryTable;
