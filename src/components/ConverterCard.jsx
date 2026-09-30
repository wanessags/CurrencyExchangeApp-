function ConverterCard({
  currencies,
  amount,
  fromCurrency,
  toCurrency,
  onAmountChange,
  onFromCurrencyChange,
  onToCurrencyChange,
  onConvert,
}) {
  return (
    <section className="card">
      <h2>Conversor de Moedas</h2>

      <div className="field">
        <label htmlFor="amount">Valor</label>

        <input
          id="amount"
          type="number"
          placeholder="100,00"
          value={amount}
          onChange={(event) => onAmountChange(event.target.value)}
        />
      </div>

      <div className="currency-row">
        <div className="field">
          <label htmlFor="fromCurrency">De</label>

          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(event) => onFromCurrencyChange(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="toCurrency">Para</label>

          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(event) => onToCurrencyChange(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="convert-button" onClick={onConvert}>
        Converter
      </button>
    </section>
  );
}

export default ConverterCard;
