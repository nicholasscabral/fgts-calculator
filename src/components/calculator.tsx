import styles from "../styles/calculator.module.css";
import { Form, Select, Button, Radio, Input } from "antd";
import { useState } from "react";
import SalaryField from "./salary-field";
import { FGTSCalculator } from "@/types/calculator";
import { FormItem, InputGroup } from "@/types/types";

const modalities = {
  domestic: "Empregada(o) domestica",
  learner: "Jovem aprendiz",
  clt: "CLT padrao",
};

const Calculator = () => {
  const [form] = Form.useForm<FGTSCalculator>();
  const [salaryFieldsValues, setSalaryFieldsValues] = useState([
    { totalIncome: 0, daysOfService: 0 },
  ]);

  const handleSalaryFieldChange = (index, value) => {
    const newSalaryFieldsValues = [...salaryFieldsValues];
    newSalaryFieldsValues[index] = value;
    setSalaryFieldsValues(newSalaryFieldsValues);
  };

  const [salaryFields, setSalaryFields] = useState([
    <SalaryField key={0} index={0} onChange={handleSalaryFieldChange} />,
  ]);

  const handleSubmit = (values: any) => {
    salaryFieldsValues.forEach((item, index) => console.log(index, { item }));
    alert(JSON.stringify({ values, salaryFieldsValues }));
  };

  const addNewSalaryField = () => {
    setSalaryFields([
      ...salaryFields,
      <SalaryField
        key={salaryFields.length}
        index={salaryFields.length}
        onChange={handleSalaryFieldChange}
      />,
    ]);
  };

  const removeLastSalaryField = () => {
    if (salaryFields.length > 1) {
      setSalaryFields(salaryFields.slice(0, -1));
    }
  };

  return (
    <Form
      name="CalculateFGTS"
      layout="vertical"
      form={form}
      className={styles.form_container}
      onFinish={(values) => handleSubmit(values)}
    >
      <FormItem name="employmentRelationship" style={{ width: "100%" }}>
        <h3>Vinculo empregaticio</h3>
        <Select
          style={{ marginTop: "10px" }}
          placeholder="Selecione o seu vinculo empregaticio"
          options={Object.entries(modalities).map(([value, label]) => {
            return { label, value };
          })}
        />
      </FormItem>
      <FormItem style={{ width: "100%" }}>
        <h3>Periodos de remuneração</h3>
        {salaryFields.map((item) => item)}
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
    </Form>
  );
};

export default Calculator;
