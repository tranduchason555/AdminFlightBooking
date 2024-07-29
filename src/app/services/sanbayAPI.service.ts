import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { BaseUrlService } from "./baseUrl.service";
import { SanBay } from "../models/sanbay.model";
@Injectable()
export class SanBayAPIService{
    constructor(
        private baseUrlService : BaseUrlService,
        private httpClient: HttpClient
    ){}
    async findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'sanbay/findall'));
    }
    async find(maSbaydi: String, maSbayden: String) {
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'sanbay/find' + maSbaydi + '/' + maSbayden));
    }
    async create(sanbay : SanBay){
        return await lastValueFrom(this.httpClient.post(this.baseUrlService.getBaseUrl() + 'sanbay/create', sanbay));
    }
    async delete(maSbay: string){
        return await lastValueFrom(this.httpClient.delete(this.baseUrlService.getBaseUrl() + 'sanbay/delete/' + maSbay));
    }
    async find2(tenTinhThanh: String) {
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'sanbay/find2/' + tenTinhThanh));
    }
}