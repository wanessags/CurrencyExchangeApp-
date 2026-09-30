const API_URL = 'https://api.frankfurter.dev/v2'

export async function getCurrencies() {
  const response = await fetch(`${API_URL}/currencies`)

  if (!response.ok) {
    throw new Error('Erro ao buscar moedas')
  }

  const data = await response.json()

  return data
}

export async function getExchangeRate(
  fromCurrency,
  toCurrency
) {
  const response = await fetch(
    `${API_URL}/rate/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}`
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar cotação')
  }

  const data = await response.json()

  return data
}