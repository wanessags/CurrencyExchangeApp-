import { useEffect, useRef, useState } from "react";
import { getCurrencyFlagUrl } from "../utils/currencyFlags";

function CurrencySelect({ label, value, currencies, disabled, onChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedCurrency = currencies.find(
    (currency) => currency.iso_code === value,
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSelect(currencyCode) {
    onChange(currencyCode);
    setOpen(false);
  }

  const flagUrl = getCurrencyFlagUrl(value);

  return (
    <div className="field currency-select-container" ref={containerRef}>
      <label>{label}</label>

      <button
        type="button"
        className="currency-select-button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
      >
        <span className="currency-selected">
          {flagUrl && <img src={flagUrl} alt="" className="currency-flag" />}

          <strong>{value}</strong>

          {selectedCurrency && (
            <span className="currency-name">{selectedCurrency.name}</span>
          )}
        </span>

        <span className="select-arrow">▾</span>
      </button>

      {open && !disabled && (
        <div className="currency-dropdown">
          {currencies.map((currency) => {
            const optionFlag = getCurrencyFlagUrl(currency.iso_code);

            return (
              <button
                type="button"
                className="currency-option"
                key={currency.iso_code}
                onClick={() => handleSelect(currency.iso_code)}
              >
                {optionFlag && (
                  <img src={optionFlag} alt="" className="currency-flag" />
                )}

                <strong>{currency.iso_code}</strong>

                <span>{currency.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

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
    <section className="card converter-card" id="inicio">
      <h2>Conversor de Moedas</h2>

      <div className="converter-grid">
        <div className="field amount-field">
          <label htmlFor="amount">Valor</label>

          <input
            id="amount"
            type="text"
            inputMode="decimal"
            placeholder="100,00"
            value={amount}
            onChange={(event) => onAmountChange(event.target.value)}
          />
        </div>

        <CurrencySelect
          label="De"
          value={fromCurrency}
          currencies={currencies}
          disabled={loadingCurrencies}
          onChange={onFromCurrencyChange}
        />

        <CurrencySelect
          label="Para"
          value={toCurrency}
          currencies={currencies}
          disabled={loadingCurrencies}
          onChange={onToCurrencyChange}
        />

        <div className="converter-button-wrapper">
          <button
            className="convert-button"
            type="button"
            onClick={onConvert}
            disabled={loadingCurrencies}
          >
            Converter
          </button>
        </div>
      </div>
    </section>
  );
}

export default ConverterCard;
