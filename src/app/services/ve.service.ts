import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { BaseUrlService } from "./baseUrl.service";
import { VeAPI } from "../models/ve.model";
@Injectable()
export class VeAPIService{
    constructor(
        private baseUrlService : BaseUrlService,
        private httpClient: HttpClient
    ){}
    async create(ve : VeAPI){
        return await lastValueFrom(this.httpClient.post(this.baseUrlService.getBaseUrl() + 've/create', ve));
    }
    async findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 've/findAll'));
    }
    async delete(id: number){
        return await lastValueFrom(this.httpClient.delete(this.baseUrlService.getBaseUrl() + 've/delete/' + id));
    }
    async findByDates(thoiGianDi:string){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl()
        + 've/findByDates/' +thoiGianDi));
    }
    async findByDates1(thoiGianDat:string ,thoiGianDi:string){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl()
        + 've/findByDates1/' + thoiGianDat + '/' + thoiGianDi));
    }
}