import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  Addresses:any;
  
  data:Search = new Search();
  readonly baseUrl ="https://c493d84e-430f-4bbc-878c-ed7a810e209d.mock.pstmn.io";

postSearch(a:any):any{
  return this.http.post(this.baseUrl+'/searchProperty', a);
}
// getSearch():Observable<any[]>
//   {
//     return this.http.get<any>(this.baseUrl+'/searchAddress');
//   }
//   getAll()
//     {
//       return this.http.get<any>(this.baseUrl+'/searchAddress');
//     }
  
  }
