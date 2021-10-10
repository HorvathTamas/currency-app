import { Fx } from '.';

export interface CurrencyResponse {
  institute: number;
  lastUpdated: Date;
  comparisonDate: Date;
  baseCurrency: string;
  fx: Fx[];
}
