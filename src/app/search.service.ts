import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  data:Search = new Search();
<<<<<<< HEAD
  readonly baseUrl = "https://4e3359f9-bffd-456b-bd54-a11ff51c3c96.mock.pstmn.io/searchProperty";
=======
  readonly baseUrl ="https://e3267334-e858-445e-b5c2-f4e161541418.mock.pstmn.io/searchProperty";
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c

postSearch(a:any):any{
  return this.http.post(this.baseUrl, a);
}}
