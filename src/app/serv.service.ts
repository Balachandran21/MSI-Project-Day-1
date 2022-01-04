import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface IcoindDetail {
 bitcoin?: { usd: number },
 ethereum?: { usd: number }
}

@Injectable({providedIn: 'root'})
export class MyService {

// inject httpClient to read restful methods
constructor(private http: HttpClient) {} 

// create a method that read API URL using GET method
getData() {
  const url = 'https://1079b9db-47d9-4d51-998d-60e5eda7b68b.mock.pstmn.io/getAddress';

  // return API response
  return this.http.get<IcoindDetail>(url)
 }
}