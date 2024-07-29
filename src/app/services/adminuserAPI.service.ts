import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { BaseUrlService } from "./baseUrl.service";
import { AdminUserAPI } from "../models/adminuser.model";
@Injectable()
export class AdminUserAPIService{
    constructor(
        private baseUrlService : BaseUrlService,
        private httpClient: HttpClient
    ){ }
    async findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'adminuser/findall'));
    }
    async create(adminuser : AdminUserAPI){
        return await lastValueFrom(this.httpClient.post(this.baseUrlService.getBaseUrl() + 'adminuser/create', adminuser));
    }
    async delete(id: number){
        return await lastValueFrom(this.httpClient.delete(this.baseUrlService.getBaseUrl() + 'adminuser/delete/' + id));
    }
    async login(taiKhoan: String, matKhau: String) {
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'adminuser/login/' + taiKhoan + '/' + matKhau));
    }
    async find(taikhoan: String, matKhau: String) {
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'adminuser/find/' + taikhoan + '/' + matKhau));
    }
}