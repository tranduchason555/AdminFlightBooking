import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private myData: string;

  setData(data: string) {
    this.myData = data;
  }

  getData() {
    return this.myData;
  }
}