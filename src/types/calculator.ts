import { EmploymentRelationship } from "./employment-relationship";

export interface FGTSCalculator {
  employmentRelationship: keyof typeof EmploymentRelationship;
  salaryFieldValues: SalaryFieldValues[];
}

export interface SalaryFieldValues {
  income: number;
  monthsOfService: number;
}
