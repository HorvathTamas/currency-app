import { BanknoteRate, ExchangeRate } from '.';

export interface Fx {
  currency: string;
  precision: number;
  nameI18N: string;
  exchangeRate: ExchangeRate;
  banknoteRate: BanknoteRate;
  flags: string[];
  denominations: number[];
}
