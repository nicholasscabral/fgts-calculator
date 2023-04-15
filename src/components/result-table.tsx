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
    },
  ];

  return (
    result.length > 0 && (
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={result}
        bordered
        pagination={false}
      />
    )
  );
};

export default ResultTable;
