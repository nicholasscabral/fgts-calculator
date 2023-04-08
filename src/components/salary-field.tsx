import { Form, Input } from "antd";
import { NumberInputWithPrefix } from "./inputs/decimal";
import { useState } from "react";
import { currencyFormatter } from "@/formatters/currency";
import { FormItem, InputGroup } from "@/types/types";

interface IndexUpdateValues {
  index: number;
  onChange: Function;
}

const SalaryField = ({ index, onChange }: IndexUpdateValues) => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [daysOfService, setDaysOfService] = useState(0);

  const handleTotalIncomeChange = (value: any) => {
    setTotalIncome(value);
    onChange(index, { totalIncome: value, daysOfService });
  };

  const handleDaysOfServiceChange = (value: any) => {
    setDaysOfService(value);
    onChange(index, { totalIncome, daysOfService: value });
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
        name="totalIncome"
        label="Salario bruto"
        style={{ marginRight: 20, width: "50%" }}
      >
        <NumberInputWithPrefix
          prefix="R$"
          value={totalIncome}
          onChange={handleTotalIncomeChange}
          formatter={currencyFormatter}
        />
      </FormItem>
      <FormItem
        name="daysOfService"
        label="Tempo de serviço"
        style={{ width: "50%" }}
      >
        <NumberInputWithPrefix
          prefix="Meses"
          value={daysOfService}
          onChange={handleDaysOfServiceChange}
        />
      </FormItem>
    </InputGroup>
  );
};

export default SalaryField;
