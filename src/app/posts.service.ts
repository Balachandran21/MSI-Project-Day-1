import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Search } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  Addresses:any;
  
  data:Search = new Search();
  readonly baseUrl ="https://3c994b79-ffd0-45d2-be80-ae2771320d27.mock.pstmn.io";

postSearch(b:any):any{
  return this.http.post(this.baseUrl+'/getAddressProperty', b);}
}
