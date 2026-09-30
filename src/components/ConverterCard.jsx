function ConverterCard({
  currencies,
  amount,
  fromCurrency,
  toCurrency,
  loadingCurrencies,
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
          min="0"
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
            disabled={loadingCurrencies}
            onChange={(event) => onFromCurrencyChange(event.target.value)}
          >
            {loadingCurrencies ? (
              <option>Carregando...</option>
            ) : (
              currencies.map((currency) => (
                <option key={currency.iso_code} value={currency.iso_code}>
                  {currency.iso_code} - {currency.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="field">
          <label htmlFor="toCurrency">Para</label>

          <select
            id="toCurrency"
            value={toCurrency}
            disabled={loadingCurrencies}
            onChange={(event) => onToCurrencyChange(event.target.value)}
          >
            {loadingCurrencies ? (
              <option>Carregando...</option>
            ) : (
              currencies.map((currency) => (
                <option key={currency.iso_code} value={currency.iso_code}>
                  {currency.iso_code} - {currency.name}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      <button
        className="convert-button"
        onClick={onConvert}
        disabled={loadingCurrencies}
      >
        {loadingCurrencies ? "Carregando moedas..." : "Converter"}
      </button>
    </section>
  );
}

export default ConverterCard;
