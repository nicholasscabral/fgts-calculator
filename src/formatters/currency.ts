const currencyFormatter = (value: any) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export { currencyFormatter };
