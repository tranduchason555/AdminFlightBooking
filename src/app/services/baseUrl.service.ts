import { Injectable } from "@angular/core";

@Injectable()
export class BaseUrlService{
    private BaseUrl: string = "https://localhost:7093/api/";
    getBaseUrl(): string {
        return this.BaseUrl;
    }

}