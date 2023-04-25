export interface ClimatologyResponse {
  pos: Pos
  pagi: Pagi[]
  siang: Siang[]
  sore: Sore[]
  malam: Malam[]
  last_data: LastDaum[]
  manual: Manual
}

export interface Pos {
  id: string
  wilayah: string
  nama: string
  tanggal: string
  siaga_hijau: string
  siaga_kuning: string
  siaga_merah: string
}

export interface Pagi {
  waktu: string
  jam: string
  wlevel: string
  wlevel_mdpl: string
  distance: string
  status: string
}

export interface Siang {
  waktu: string
  jam: string
  wlevel: string
  wlevel_mdpl: string
  distance: string
  status: string
}

export interface Sore {
  waktu: string
  jam: string
  wlevel: string
  wlevel_mdpl: string
  distance: string
  status: string
}

export interface Malam {
  waktu: string
  jam: string
  wlevel: string
  wlevel_mdpl: string
  distance: string
  status: string
}

export interface LastDaum {
  waktu: string
  jam: string
  wlevel: string
  wlevel_mdpl: string
  distance: string
  status: string
}

export interface Manual {
  enam: string
  wlevel_enam: string
  status_enam: string
  duabelas: string
  wlevel_duabelas: string
  status_duabelas: string
  delapanbelas: string
  wlevel_delapanbelas: string
  status_delapanbelas: string
}
