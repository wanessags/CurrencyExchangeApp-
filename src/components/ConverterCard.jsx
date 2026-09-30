function ConverterCard({ currencies, fromCurrency, toCurrency }) {
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

          <select id="fromCurrency" defaultValue={fromCurrency}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="toCurrency">Para</label>

          <select id="toCurrency" defaultValue={toCurrency}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="convert-button">Converter</button>
    </section>
  );
}

export default ConverterCard;
