import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = `http://localhost:3000`;

  constructor(private _HttpClient:HttpClient) { }

  customersData():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/customers`);
  }

  transactionsData():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/transactions`);
  }

  getTransactionByCustomerId(id:number):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}/transactions?customer_id=${id}`);
  }
}
