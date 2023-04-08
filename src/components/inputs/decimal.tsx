import { InputGroup } from "@/types/types";
import { Input, InputNumber, InputNumberProps } from "antd";
import { Formatter } from "antd/es/statistic/utils";
import React from "react";

type NumberInputWithPrefix = InputNumberProps<number> & {
  prefix: string;
  formatter?: Formatter;
};

const NumberInputWithPrefix: React.FC<NumberInputWithPrefix> = ({
  prefix,
  onChange,
  formatter,
}) => {
  const width = prefix.length > 3 ? 65 : 40;
  return (
    <InputGroup style={{ display: "flex" }} compact>
      <Input style={{ width }} value={prefix} disabled />
      <InputNumber
        style={{ flex: 1 }}
        min={0}
        onChange={onChange}
        formatter={formatter}
      />
    </InputGroup>
  );
};

export { NumberInputWithPrefix };
