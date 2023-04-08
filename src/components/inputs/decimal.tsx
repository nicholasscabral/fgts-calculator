import { Input, InputNumber, InputNumberProps } from "antd";
import React from "react";

const InputGroup = Input.Group;

type NumberInputWithPrefix = InputNumberProps<number> & {
  prefix: string;
};

const NumberInputWithPrefix: React.FC<NumberInputWithPrefix> = ({
  prefix,
  onChange,
}) => {
  return (
    <InputGroup style={{ display: "flex" }} compact>
      <Input style={{ width: "50px" }} value={prefix} disabled />
      <InputNumber style={{ flex: 1 }} min={0} onChange={onChange} />
    </InputGroup>
  );
};

export { NumberInputWithPrefix };