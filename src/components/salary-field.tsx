import { NumberInputWithPrefix } from "./inputs/decimal";
import { useState } from "react";
import { currencyFormatter, currencyParser } from "@/formatters/currency";
import { FormItem, InputGroup } from "@/types/types";
import { SalaryFieldValues } from "@/types/calculator";

interface SalaryFieldProps {
  key: number;
  updateSalaryField: Function;
  data: SalaryFieldValues;
}

const SalaryField = ({ key, updateSalaryField, data }: SalaryFieldProps) => {
  const [income, setIncome] = useState(data.income);
  const [monthsOfService, setMonthsOfService] = useState(data.monthsOfService);

  const handleIncomeChange = (value: any) => {
    setIncome(value);
    updateSalaryField(key, { income: value, monthsOfService });
  };

  const handleMonthsOfServiceChange = (value: any) => {
    setMonthsOfService(value);
    updateSalaryField(key, { income, monthsOfService: value });
  };

  return (
    <InputGroup
      compact
      style={{
        margin: "15px 0px 10px 0px",
        borderBottom: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormItem
        name="income"
        label="Salario bruto:"
        style={{ width: "47.5%", marginRight: "5%" }}
      >
        <NumberInputWithPrefix
          prefix="R$"
          placeholder="0,00"
          value={income}
          onChange={handleIncomeChange}
          formatter={currencyFormatter}
          parser={currencyParser}
        />
      </FormItem>
      <FormItem
        name="monthsOfService"
        label="Tempo de serviço:"
        style={{ width: "47.5%" }}
      >
        <NumberInputWithPrefix
          prefix="Meses"
          placeholder="0"
          value={monthsOfService}
          onChange={handleMonthsOfServiceChange}
        />
      </FormItem>
    </InputGroup>
  );
};

export default SalaryField;
