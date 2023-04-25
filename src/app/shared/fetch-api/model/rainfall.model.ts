export interface RainfallModel {
  pos: Pos;
  total: number;
  jam: Jam[];
  rain: string;
}

export interface Pos {
  wilayah: string;
  pos_id: string;
  nama: string;
  tanggal: string;
}

export interface Jam {
  "1": any;
  "2": any;
  "3": any;
  "4": any;
}

export interface ResponsePosHome {
  pos: PosHome;
}

export interface PosHome {
  id: string;
  wilayah: string;
  nama: string;
  current_ch: string;
  tanggal: string;
}
