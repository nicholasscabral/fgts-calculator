const currencyFormatter = (value: any, useStyle: boolean = false) =>
  new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: useStyle ? "currency" : undefined,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

const currencyParser = (value: any) =>
  parseInt(value.toString().replace(/,/g, "").replace(/\./g, ""), 10) /
  Math.pow(10, 2);

export { currencyFormatter, currencyParser };
