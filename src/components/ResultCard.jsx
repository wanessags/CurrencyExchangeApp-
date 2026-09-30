function ResultCard({
  amount,
  fromCurrency,
  toCurrency,
  convertedValue,
  exchangeRate,
  message,
}) {
  return (
    <section className="card result-card">
      <h2>Resultado da Conversão</h2>

      {message && <p className="error-message">{message}</p>}

      {!message && convertedValue === null && (
        <p className="result-placeholder">
          Informe um valor e clique em Converter.
        </p>
      )}

      {!message && convertedValue !== null && (
        <>
          <p className="result-value">
            {Number(amount).toFixed(2)} {fromCurrency}
            {" = "}
            {convertedValue.toFixed(2)} {toCurrency}
          </p>

          <p className="exchange-rate">
            Taxa de câmbio: 1 {fromCurrency}
            {" = "}
            {exchangeRate.toFixed(4)} {toCurrency}
          </p>
        </>
      )}
    </section>
  );
}

export default ResultCard;
