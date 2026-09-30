import { formatValue, formatRate, parseCurrencyValue } from "../utils/currency";

function ResultCard({
  amount,
  fromCurrency,
  toCurrency,
  convertedValue,
  exchangeRate,
  message,
}) {
  return (
    <section className="result-card">
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
            {formatValue(parseCurrencyValue(amount))} {fromCurrency}
            {" = "}
            {formatValue(convertedValue)} {toCurrency}
          </p>

          <div className="result-details">
            <span>
              Taxa de câmbio: 1 {fromCurrency}
              {" = "}
              {formatRate(exchangeRate)} {toCurrency}
            </span>

            <span>◷ Atualizado agora</span>
          </div>
        </>
      )}
    </section>
  );
}

export default ResultCard;
