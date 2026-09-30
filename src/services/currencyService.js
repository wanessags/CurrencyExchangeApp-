const API_URL = "https://api.frankfurter.dev/v2";

export async function getCurrencies() {
  const response = await fetch(`${API_URL}/currencies`);

  if (!response.ok) {
    throw new Error("Erro ao buscar moedas");
  }

  return await response.json();
}

export async function getExchangeRate(fromCurrency, toCurrency) {
  const response = await fetch(
    `${API_URL}/rate/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}`,
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar cotação");
  }

  return await response.json();
}

export async function getHistoricalRates(fromCurrency, toCurrency, days = 7) {
  const endDate = new Date();
  const startDate = new Date();

  startDate.setDate(endDate.getDate() - days);

  const from = startDate.toISOString().split("T")[0];
  const to = endDate.toISOString().split("T")[0];

  const url =
    `${API_URL}/rates?base=${fromCurrency.toLowerCase()}` +
    `&quotes=${toCurrency.toLowerCase()}` +
    `&from=${from}&to=${to}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar histórico");
  }

  return await response.json();
}
