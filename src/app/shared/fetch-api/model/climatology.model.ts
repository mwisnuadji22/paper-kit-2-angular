export interface ClimatologyModel {
  pos: Pos
  data: Data
}

export interface Pos {
  id: string
  wilayah: string
  nama: string
  tanggal: string
}

export interface Data {
  ch: string;
  jam: string
  rain: string
  suhu_min: string
  suhu_max: string
  kelembapan: string
  kecepatan_angin: string
  lama_penyinaran: string
  penguapan: string
}
