import { ITableData, IColumns } from "./Home.interface";

export const tableData: ITableData[] = [
  {
    numberApplication: 1,
    coordinatesFrom: {
      lat: 59.84660399,
      lng: 30.29496392,
    },
    coordinatesTo: {
      lat: 59.82934196,
      lng: 30.42423701,
    },
  },
  {
    numberApplication: 2,
    coordinatesFrom: {
      lat: 59.82934196,
      lng: 30.42423701,
    },
    coordinatesTo: {
      lat: 59.82761295,
      lng: 30.41705607,
    },
  },
  {
    numberApplication: 3,
    coordinatesFrom: {
      lat: 59.83567701,
      lng: 30.38064206,
    },
    coordinatesTo: {
      lat: 59.84660399,
      lng: 30.29496392,
    },
  },
  {
    numberApplication: 4,
    coordinatesFrom: {
      lat: 59.84660399,
      lng: 30.29496392,
    },
    coordinatesTo: {
      lat: 59.82761295,
      lng: 30.41705607,
    },
  },
  {
    numberApplication: 5,
    coordinatesFrom: {
      lat: 59.83567701,
      lng: 30.38064206,
    },
    coordinatesTo: {
      lat: 59.84660399,
      lng: 30.29496392,
    },
  },
];

export const columnsData: IColumns[] = [
  {
    title: "Номер заявки",
    dataIndex: "numberApplication",
    key: "numberApplication",
  },
  {
    dataIndex: "fromLat",
    title: "Координаты ОТ lat",
    key: "fromLat",
  },
  {
    title: "Координаты ОТ lng",
    dataIndex: "fromLng",
    key: "fromLng",
  },
  {
    title: "Координаты ДО lat",
    dataIndex: "toLat",
    key: "toLat",
  },
  {
    title: "Координаты ДО lng",
    dataIndex: "toLng",
    key: "toLng",
  },
];
