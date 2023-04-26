import styles from "../styles/calculator.module.css";
import { Form, Select, Button } from "antd";
import { useState } from "react";
import SalaryField from "./salary-field";
import { FGTSCalculator, SalaryFieldValues } from "@/types/calculator";
import { FormItem, InputGroup } from "@/types/types";
import { EmploymentRelationship } from "@/types/employment-relationship";
import { emptySalaryFieldValues } from "@/utils/constants";
import ResultTable from "./result-table";
import { Result } from "@/types/result";
import {
  calculateFGTS,
  getEmploymentRelationshipOptions,
} from "@/utils/calculator-helper";

const Calculator = () => {
  const [form] = Form.useForm<FGTSCalculator>();
  const [result, setResult] = useState<Result[]>([]);
  const [employmentRelationship, setEmploymentRelationship] = useState(
    EmploymentRelationship.clt
  );
  const [salaryFields, setSalaryFields] = useState<SalaryFieldValues[]>([
    emptySalaryFieldValues,
  ]);

  const handleSalaryFieldChange = (index: number, value: SalaryFieldValues) => {
    const newSalaryFields = [...salaryFields];
    newSalaryFields[index] = value;
    setSalaryFields(newSalaryFields);
  };

  const handleSubmit = () => {
    const responseData = calculateFGTS(employmentRelationship, salaryFields);
    setResult(responseData);
  };

  const addNewSalaryField = () => {
    setSalaryFields([...salaryFields, emptySalaryFieldValues]);
  };

  const removeLastSalaryField = () => {
    if (salaryFields.length > 1) {
      setSalaryFields(salaryFields.slice(0, -1));
    }
  };

  return (
    <>
      <Form
        name="CalculateFGTS"
        layout="vertical"
        form={form}
        className={styles.form_container}
        onFinish={() => handleSubmit()}
      >
        <FormItem name="Vinculo empregaticio" style={{ width: "100%" }}>
          <h3>Vinculo empregaticio</h3>
          <Select
            style={{ marginTop: "10px" }}
            value={employmentRelationship}
            onChange={(value) => {
              setEmploymentRelationship(value);
            }}
            options={getEmploymentRelationshipOptions()}
          />
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <h3>Periodos de remuneração</h3>
          {salaryFields.map((data, index) => (
            <SalaryField
              key={index}
              index={index}
              data={data}
              updateSalaryField={handleSalaryFieldChange}
            />
          ))}
        </FormItem>
        <InputGroup
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormItem>
            <Button type="text" onClick={() => addNewSalaryField()}>
              <strong>+ Adicionar</strong>
            </Button>
            <Button type="text" danger onClick={() => removeLastSalaryField()}>
              <strong> - Remover</strong>
            </Button>
          </FormItem>
        </InputGroup>
        <FormItem
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="primary"
            className={styles.button}
            onClick={() => form.submit()}
          >
            Calcular FGTS
          </Button>
        </FormItem>
        <ResultTable result={result} />
      </Form>
    </>
  );
};

export default Calculator;
