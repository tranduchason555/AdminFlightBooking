export class VeAPI {
  constructor( thoiGianDat: string, thoiGianDi: string, loaiGhe: string, giaGhe: number,soLuong:number, maCb:string,maHk:number) {
      this.thoiGianDat = thoiGianDat;
      this.thoiGianDi = thoiGianDi;
      this.loaiGhe = loaiGhe;
      this.giaGhe = giaGhe;
      this.soLuong=soLuong;
      this.maCb = maCb;
      this.maHk = maHk;
    }
  maVe:number;
  thoiGianDat:string;
  thoiGianDi:string;
  loaiGhe:string;
  giaGhe:number;
  soLuong:number;
  maCb:string;
  maHk:number;
}