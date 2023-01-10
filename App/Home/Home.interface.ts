export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface ITableData {
  numberApplication: number;
  coordinatesFrom: ICoordinates;
  coordinatesTo: ICoordinates;
}

export interface IColumns {
  title: string;
  dataIndex: string;
  key: string;
}

export interface ICorrectData {
  numberApplication: string;
  fromLat: number;
  fromLng: number;
  toLat: number;
  toLng: number;
  key: string;
}
