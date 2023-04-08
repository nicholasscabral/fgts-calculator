import { EmploymentRelationship } from "./employment-relationship";

export interface FGTSCalculator {
  income: number;
  monthsOfService: number;
  employmentRelationship: keyof typeof EmploymentRelationship;
}
