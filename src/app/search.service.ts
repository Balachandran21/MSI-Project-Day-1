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
<<<<<<< HEAD
  readonly baseUrl ="https://c493d84e-430f-4bbc-878c-ed7a810e209d.mock.pstmn.io";
=======
<<<<<<< HEAD
  readonly baseUrl = "https://4e3359f9-bffd-456b-bd54-a11ff51c3c96.mock.pstmn.io/searchProperty";
=======
  readonly baseUrl ="https://e3267334-e858-445e-b5c2-f4e161541418.mock.pstmn.io/searchProperty";
>>>>>>> d65544417ae1634698785b71aef1783356b8d70c
>>>>>>> b353fb13a4538ffa0dcdb009564344f9733edc88

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
