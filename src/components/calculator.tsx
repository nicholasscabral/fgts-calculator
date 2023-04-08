import { useFormik } from "formik";
import styles from "../styles/calculator.module.css";
import { Form, Select, Button, Radio, Input } from "antd";
import { CalculatorFields } from "@/types/types";
import { NumberInputWithPrefix } from "./inputs/decimal";
import { useState } from "react";
import SalaryField from "./salary-field";

const FormItem = Form.Item;
const InputGroup = Input.Group;

const modalities = {
  domestic: "Empregada(o) domestica",
  learner: "Jovem aprendiz",
  clt: "CLT padrao",
};

const Calculator = () => {
  const [form] = Form.useForm<CalculatorFields>();
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
      <FormItem name="employmentRelationship">
        <h3>Vinculo empregaticio</h3>
        <Select
          style={{ marginTop: "10px" }}
          placeholder="Selecione o seu vinculo empregaticio"
          options={Object.entries(modalities).map(([value, label]) => {
            return { label, value };
          })}
        />
      </FormItem>
      <h3>Periodos de remuneração</h3>
      {salaryFields.map((item) => item)}
      <InputGroup
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormItem>
          <Button type="text" onClick={() => addNewSalaryField()}>
            + Adicionar
          </Button>
          <Button type="text" danger onClick={() => removeLastSalaryField()}>
            - Remover
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
          style={{ maxWidth: "400px" }}
          onClick={() => form.submit()}
        >
          Calcular FGTS
        </Button>
      </FormItem>
    </Form>
  );
};

export default Calculator;
