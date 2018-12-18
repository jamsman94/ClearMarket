export interface GraphJson {
  status: number;
  data: [Account];
  message: string;
  sequence: any;
}

export interface Account {
  a: string;
  r: number;
  rgb: string;
  cp: [CpAccount];
}

export interface CpAccount {
  p: number;
  ca: string;
  pc: string;
  q: number;
  r: number;
  rgb: string;
}
