export type CurrencyResponce = {
  base: string;
  date: string;
  motd: { msg: string; url: string };
  rates: { [key: string]: number };
  success: boolean;
};

export type CurrencyHistoryItemType = {
  id: number;
  num: number;
  date: string;
  currencyType: string;
  currencyData: number;
};
