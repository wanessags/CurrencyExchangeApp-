export function validateConversion(amount, fromCurrency, toCurrency) {
  const numericAmount = Number(amount);

  if (!amount || numericAmount <= 0) {
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
  return Number(amount) * rate;
}

export function formatValue(value) {
  return Number(value).toFixed(2);
}

export function formatRate(rate) {
  return Number(rate).toFixed(4);
}
