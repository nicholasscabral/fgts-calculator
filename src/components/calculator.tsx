import { useFormik } from "formik";
import styles from "../styles/calculator.module.css";
import { Form, Select, Button, Radio, Input } from "antd";
import { CalculatorFields } from "@/types/types";
import { NumberInputWithPrefix } from "./inputs/decimal";
import { useState } from "react";
import SalaryField from "./salary-field";

const FormItem = Form.Item;
const InputGroup = Input.Group;

const Calculator = () => {
  const [form] = Form.useForm<CalculatorFields>();
  const [salaryFields, setSalaryFields] = useState([<SalaryField key={0} />]);
  const [salaryFieldsValues, setSalaryFieldsValues] = useState([
    { totalIncome: 0, daysOfService: 0 },
  ]);

  const modalities = {
    domestic: "Empregada(o) domestica",
    learner: "Jovem aprendiz",
    clt: "CLT padrao",
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const addNewSalaryField = () => {
    setSalaryFields([
      ...salaryFields,
      <SalaryField key={salaryFields.length} />,
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
      // initialValues={values}
      onFinish={handleSubmit}
    >
      <FormItem
        name="modality"
        label="Vinculo empragaticio"
        className={styles.field}
      >
        <Select
          placeholder="Selecione o seu vinculo empregaticio"
          options={Object.entries(modalities).map(([value, label]) => {
            return { label, value };
          })}
        />
      </FormItem>
      <h3>Periodos de remuneração</h3>
      {salaryFields.map((item) => item)}
      <InputGroup>
        <FormItem>
          <Button type="text" onClick={() => addNewSalaryField()}>
            + Adicionar
          </Button>
          <Button type="text" danger onClick={() => removeLastSalaryField()}>
            - Remover
          </Button>
        </FormItem>
      </InputGroup>

      <Button
        type="primary"
        style={{ maxWidth: "400px" }}
        // onClick={handleSubmit(values)}
      >
        Calcular FGTS
      </Button>
    </Form>
  );
};

export default Calculator;
