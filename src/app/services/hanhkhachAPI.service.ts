import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { BaseUrlService } from "./baseUrl.service";
import { HanhKhachAPI } from "../models/hanhkhach.model";
@Injectable()
export class HanhKhachAPIService {
    constructor(
        private baseUrlService : BaseUrlService,
        private httpClient : HttpClient
    ){}
    async login1(taiKhoan: any, matKhau: any) {
        const loginUrl = this.baseUrlService.getBaseUrl() + 'hanhkhach/login';
        const body = { taiKhoan, matKhau };
    
        try {
          const response = await lastValueFrom(this.httpClient.post(loginUrl, body));
          return response;
        } catch (error) {
          console.error('Login failed:', error);
          throw error; // Rethrow the error for the calling code to handle
        }
      }
      async login(hanhkhach:HanhKhachAPI) {
        return await lastValueFrom(this.httpClient.post(this.baseUrlService.getBaseUrl() + 'hanhkhach/login/',hanhkhach));
    }
    async find(taikhoan: String, matKhau: String) {
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'hanhkhach/find/' + taikhoan + '/' + matKhau));
    }
    async find1(taikhoan: String) {
      return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'hanhkhach/find1/' + taikhoan));
  }
    async findAll(){
      return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'hanhkhach/findAll'));
  }
  async create(hanhkhach : HanhKhachAPI){
    return await lastValueFrom(this.httpClient.post(this.baseUrlService.getBaseUrl() + 'hanhkhach/create', hanhkhach));
}
async delete(maHk: number){
  return await lastValueFrom(this.httpClient.delete(this.baseUrlService.getBaseUrl() + 'hanhkhach/delete/' + maHk));
}
async find2(tenHanhKhach: String) {
  return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'hanhkhach/find2/' + tenHanhKhach));
}
}