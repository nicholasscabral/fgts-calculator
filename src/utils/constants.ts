import { SalaryFieldValues } from "@/types/calculator";
import { EmploymentRelationship } from "@/types/employment-relationship";

export const monthlyPercentageByEmploymentRelationship: Record<
  keyof typeof EmploymentRelationship,
  number
> = {
  [EmploymentRelationship.clt]: 0.08,
  [EmploymentRelationship.learner]: 0.02,
  [EmploymentRelationship.domestic]: 0.112,
};

export const displayNameByEmploymentRelationship: Record<
  keyof typeof EmploymentRelationship,
  string
> = {
  [EmploymentRelationship.clt]: "CLT",
  [EmploymentRelationship.learner]: "Jovem aprendiz",
  [EmploymentRelationship.domestic]: "Empregada(o) domestica",
};

export const translateLabel: Record<string, string> = {
  monthlyDeposit: "Deposito mensal",
  monthlyDeposits: "Depositos mensais",
  estimatedbalance: "Saldo estimado",
  aliquot: "Aliquota mensal",
};

export const emptySalaryFieldValues: SalaryFieldValues = {
  income: 0,
  monthsOfService: 0,
};
