const currencyCountries = {
  BRL: "br",
  USD: "us",
  EUR: "eu",
  GBP: "gb",
  JPY: "jp",
  CAD: "ca",
  AUD: "au",
  CHF: "ch",
  CNY: "cn",
  INR: "in",
  MXN: "mx",
  ARS: "ar",
  CLP: "cl",
  COP: "co",
  NZD: "nz",
  KRW: "kr",
  SEK: "se",
  NOK: "no",
  DKK: "dk",
  PLN: "pl",
  CZK: "cz",
  HUF: "hu",
  TRY: "tr",
  ZAR: "za",
  AED: "ae",
  SAR: "sa",
  SGD: "sg",
  HKD: "hk",
  THB: "th",
  IDR: "id",
  MYR: "my",
  PHP: "ph",
  ILS: "il",
  ISK: "is",
  RON: "ro",
  BGN: "bg",
};

export function getCurrencyCountry(currencyCode) {
  return currencyCountries[currencyCode] || null;
}

export function getCurrencyFlagUrl(currencyCode) {
  const country = getCurrencyCountry(currencyCode);

  if (!country) {
    return null;
  }

  return `https://flagcdn.com/w40/${country}.png`;
}
