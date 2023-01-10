import { Table } from "antd";
import { FC } from "react";
import { columnsData, tableData } from "./Home.data";
import { ICorrectData, ITableData } from "./Home.interface";
import style from "./Home.module.scss";

const Home: FC = () => {
  const getDataForTable = (data: ITableData[]): ICorrectData[] => {
    return data.map(
      (way, index) =>
        ({
          numberApplication: `№${way.numberApplication}`,
          fromLat: way.coordinatesFrom.lat,
          fromLng: way.coordinatesFrom.lng,
          toLat: way.coordinatesTo.lat,
          toLng: way.coordinatesTo.lng,
          key: String(index),
        } as ICorrectData)
    );
  };

  return (
    <Table
      columns={columnsData}
      dataSource={getDataForTable(tableData)}
      rowSelection={{
        type: "radio",
        onSelect: (record) => console.log(record),
      }}
      pagination={false}
    />
  );
};

export default Home;
