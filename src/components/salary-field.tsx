import { Form, Input } from "antd";
import { NumberInputWithPrefix } from "./inputs/decimal";
import { useState } from "react";

const FormItem = Form.Item;
const InputGroup = Input.Group;

const SalaryField = () => {
  return (
    <>
      <InputGroup compact style={{ marginTop: 15 }}>
        <FormItem
          name="totalIncome"
          label="Salario bruto"
          style={{ marginRight: 20 }}
        >
          <NumberInputWithPrefix prefix="R$" min={0} />
        </FormItem>
        <FormItem name="daysOfService" label="Tempo de serviço (em meses)">
          <NumberInputWithPrefix prefix="Mes" min={0} />
        </FormItem>
      </InputGroup>
      <hr />
    </>
  );
};

export default SalaryField;
