import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  data:Search = new Search();
  readonly baseUrl ="https://e3267334-e858-445e-b5c2-f4e161541418.mock.pstmn.io/searchProperty";

postSearch(a:any):any{
  return this.http.post(this.baseUrl, a);
}}
