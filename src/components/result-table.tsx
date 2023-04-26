import Table from "antd/lib/table";

const ResultTable = ({ result }: { result: any }) => {
  const columns = [
    {
      title: "Dados",
      key: "label",
      dataIndex: "label",
    },
    {
      title: "Valores",
      key: "value",
      dataIndex: "value",
      render: (v) => (Array.isArray(v) ? "Expandir" : v),
    },
  ];

  const nestedColumns = [
    { title: "", dataIndex: "rowName", width: "60%" },
    { title: "", dataIndex: "month", width: "40%" },
  ];

  const curValue = result[result.findIndex((a) => Array.isArray(a.value))];

  console.log({ curValue });

  const hasArray = result.some(({ value }: any) => Array.isArray(value));

  const getNestedTableData = (value: any[]) =>
    value.map((a: string[], index: number) => {
      return {
        rowName: `${index + 1}º periodo `,
        month: a,
      };
    });

  return (
    result.length > 0 &&
    (hasArray ? (
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={result}
        bordered
        pagination={false}
        size="small"
        expandable={{
          rowExpandable: (record) => Array.isArray(record.value),
          expandedRowRender: ({ value }) => (
            <Table
              style={{ width: "100%" }}
              size="small"
              pagination={false}
              dataSource={getNestedTableData(value)}
              columns={nestedColumns}
            />
          ),
          defaultExpandAllRows: false,
          expandRowByClick: true,
        }}
      />
    ) : (
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={result}
        bordered
        pagination={false}
        size="small"
      />
    ))
  );
};

export default ResultTable;
