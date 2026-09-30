import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="header">
        <h1>Currency Exchange App</h1>
        <p>Converta e analise moedas de forma simples</p>
      </header>

      <section className="card">
        <h2>Conversor de Moedas</h2>

        <div className="field">
          <label htmlFor="amount">Valor</label>
          <input id="amount" type="number" placeholder="100,00" />
        </div>

        <div className="currency-row">
          <div className="field">
            <label htmlFor="fromCurrency">De</label>

            <select id="fromCurrency" defaultValue="BRL">
              <option value="BRL">BRL</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="toCurrency">Para</label>

            <select id="toCurrency" defaultValue="USD">
              <option value="USD">USD</option>
              <option value="BRL">BRL</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        <button className="convert-button">Converter</button>
      </section>

      <section className="card result-card">
        <h2>Resultado da Conversão</h2>

        <p className="result-value">R$ 100,00 = US$ 18,50</p>

        <p className="exchange-rate">Taxa de câmbio: 1 BRL = 0,1850 USD</p>
      </section>

      <section className="card">
        <div className="section-header">
          <h2>Histórico da Cotação</h2>

          <select className="period-select" defaultValue="7">
            <option value="7">Últimos 7 dias</option>
            <option value="30">Últimos 30 dias</option>
            <option value="90">Últimos 90 dias</option>
          </select>
        </div>

        <div className="chart-placeholder">
          <p>Gráfico de cotação</p>
        </div>
      </section>

      <section className="card">
        <div className="section-header">
          <h2>Dados Históricos</h2>

          <div className="table-actions">
            <input
              className="search-input"
              type="text"
              placeholder="Buscar..."
            />

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
    </main>
  );
}

export default App;
