function ConverterCard() {
  return (
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
  );
}

export default ConverterCard;
