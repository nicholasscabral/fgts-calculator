import { useFormik } from "formik";
import styles from "../styles/calculator.module.css";
import { Form, Select, Button, Radio, Input } from "antd";
import { CalculatorFields } from "@/types/types";
import { NumberInputWithPrefix } from "./inputs/decimal";
import { useState } from "react";

const FormItem = Form.Item;
const InputGroup = Input.Group;

const Calculator = () => {
  const [form] = Form.useForm<CalculatorFields>();
  const [useDateSelector, setUseDateSelector] = useState(true);

  const modalities = {
    domestic: "Empregada(o) domestica",
    learner: "Jovem aprendiz",
    clt: "CLT padrao",
  };

  const label = useDateSelector ? "Sim" : "Não";

  const values = {
    modality: "Selecione sua modalidade",
    totalIncome: "",
    daysOfService: "",
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
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
      <FormItem name="modality" label="Modalide" className={styles.field}>
        <Select
          placeholder="Selecione a sua modalidade"
          options={Object.entries(modalities).map(([value, label]) => {
            return { label, value };
          })}
        />
      </FormItem>
      <InputGroup compact>
        <FormItem name="totalIncome" label="Salario bruto">
          <NumberInputWithPrefix prefix="R$" min={0} />
        </FormItem>
        <FormItem name="daysOfService" label="Tempo de serviço (em meses)">
          <NumberInputWithPrefix prefix="Meses" min={0} />
        </FormItem>
      </InputGroup>

      <Button>Calcular FGTS</Button>
    </Form>
  );
};

export default Calculator;
