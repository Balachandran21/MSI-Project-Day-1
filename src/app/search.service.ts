import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  data:Search = new Search();
  readonly baseUrl = "https://4e3359f9-bffd-456b-bd54-a11ff51c3c96.mock.pstmn.io/searchProperty";

postSearch(a:any):any{
  return this.http.post(this.baseUrl, a);
}}
