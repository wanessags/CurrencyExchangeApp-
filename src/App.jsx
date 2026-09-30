import "./App.css";
function App() {
  return (
    <main className="app">
      <header className="header">
        <h1>Currency Exchange App</h1>
        <p>Converta e analise moedas de forma simples</p>
      </header>

      <section className="card converter-card">
        <h2>Conversor de Moedas</h2>

        <div className="field">
          <label>Valor</label>
          <input type="number" placeholder="100,00" />
        </div>

        <div className="currency-row">
          <div className="field">
            <label>De</label>
            <select>
              <option>BRL</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>

          <div className="field">
            <label>Para</label>
            <select>
              <option>USD</option>
              <option>BRL</option>
              <option>EUR</option>
            </select>
          </div>
        </div>

        <button className="convert-button">Converter</button>
      </section>

      <section className="card result-card">
        <h2>Resultado da Conversão</h2>
        <p className="result-value">R$ 100,00 = US$ 18,50</p>
        <span>Taxa de câmbio: 1 BRL = 0,1850 USD</span>
      </section>
    </main>
  );
}

export default App;
