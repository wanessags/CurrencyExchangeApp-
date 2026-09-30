export function parseCurrencyValue(value) {
  if (typeof value === "number") {
    return value;
  }

  const normalizedValue = String(value)
    .trim()
    .replace(/\./g, "")
    .replace(",", ".");

  return Number(normalizedValue);
}

export function validateConversion(amount, fromCurrency, toCurrency) {
  const numericAmount = parseCurrencyValue(amount);

  if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
    return {
      valid: false,
      message: "Digite um valor maior que zero.",
    };
  }

  if (fromCurrency === toCurrency) {
    return {
      valid: false,
      message: "Escolha moedas diferentes.",
    };
  }

  return {
    valid: true,
    message: "",
  };
}

export function calculateConversion(amount, rate) {
  const numericAmount = parseCurrencyValue(amount);

  return numericAmount * Number(rate);
}

export function formatValue(value) {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value));
}

export function formatRate(value) {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  }).format(Number(value));
}

export function formatDate(date) {
  if (!date) {
    return "";
  }

  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
}
