import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { BaseUrlService } from "./baseUrl.service";
import { ThongTinChuyenBay } from "../models/thongtinchuyenbay.model";
@Injectable()
export class ThongTinChuyenBayAPIService{
    constructor(
        private baseUrlService : BaseUrlService,
        private httpClient: HttpClient
    ){}
    async findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'thongtinchuyenbay/findAll'));
    }
    async search(masbaydi: string, masbayden: string,ngaycatcanh:string){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl()
        + 'thongtinchuyenbay/search/' + masbaydi + '/' + masbayden+ '/' + ngaycatcanh));
    }
    async find(maCb:string){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl() + 'thongtinchuyenbay/find'+'/'+ maCb));
    }
    async create(chuyenbay : ThongTinChuyenBay){
        return await lastValueFrom(this.httpClient.post(this.baseUrlService.getBaseUrl() + 'thongtinchuyenbay/create', chuyenbay));
    }
    async delete(maCb: string){
        return await lastValueFrom(this.httpClient.delete(this.baseUrlService.getBaseUrl() + 'thongtinchuyenbay/delete/' + maCb));
    }
    async findByDates(ngayCatCanh:string){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl()
        + 'thongtinchuyenbay/findByDates/' +ngayCatCanh));
    }
    async findByDates1(ngaycatcanh:string ,ngayhacanh:string){
        return await lastValueFrom(this.httpClient.get(this.baseUrlService.getBaseUrl()
        + 'thongtinchuyenbay/findByDates1/' + ngaycatcanh + '/' + ngayhacanh));
    }
    async update(thongtinchuyenbay : ThongTinChuyenBay){
        return await lastValueFrom(this.httpClient.put(this.baseUrlService.getBaseUrl() + 'thongtinchuyenbay/update', thongtinchuyenbay));
      }
}