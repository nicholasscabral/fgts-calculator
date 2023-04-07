import { Modality } from "./modality";

export interface CalculatorFields {
  totalIncome: number;
  daysOfService: number;
  modality: keyof typeof Modality;
}
