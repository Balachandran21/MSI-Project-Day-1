import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  data:Search = new Search();
  readonly baseUrl = "https://55c0f676-0021-4b37-9870-6c9a3e628eed.mock.pstmn.io/newSearchProperty";

postSearch(a:any):any{
  return this.http.post(this.baseUrl, a);
}}
