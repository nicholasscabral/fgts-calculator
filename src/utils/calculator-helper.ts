import { SalaryFieldValues } from "@/types/calculator";
import {
  displayNameByEmploymentRelationship,
  translateLabel,
  monthlyPercentageByEmploymentRelationship,
} from "./constants";
import { EmploymentRelationship } from "@/types/employment-relationship";
import { Result } from "@/types/result";
import { currencyFormatter } from "@/formatters/currency";

export const getEmploymentRelationshipOptions = () =>
  Object.entries(displayNameByEmploymentRelationship).map(([value, label]) => {
    return {
      value,
      label,
    };
  });

export const formatResult = (data: any): Result[] => {
  return Object.entries(data).map(([label, value]) => {
    console.log(label, value);
    return {
      label: translateLabel[label],
      value: label == "aliquot" ? `${value}%` : currencyFormatter(value, true),
    };
  });
};

export const calculateOneSalaryField = (
  [{ income, monthsOfService }]: SalaryFieldValues[],
  aliquot: number
): any => {
  const monthlyDeposit = income * aliquot;
  const estimatedbalance = monthlyDeposit * monthsOfService;
  return {
    estimatedbalance,
    monthlyDeposit,
  };
};

export const calculateMultipleSalaryFields = (
  fields: SalaryFieldValues[],
  aliquot: number
) => {
  return {};
};

export const calculateFGTS = (
  employmentRelationship: EmploymentRelationship,
  salaryFields: SalaryFieldValues[]
): Result[] => {
  const aliquot =
    monthlyPercentageByEmploymentRelationship[employmentRelationship];

  const multipleSalaryFields = salaryFields.length > 1;

  const result = multipleSalaryFields
    ? calculateMultipleSalaryFields(salaryFields, aliquot)
    : calculateOneSalaryField(salaryFields, aliquot);

  return formatResult({
    ...result,
    aliquot: (aliquot * 100).toFixed(1),
  });
};
