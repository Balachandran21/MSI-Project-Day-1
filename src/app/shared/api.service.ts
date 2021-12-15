import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postOwner(data:any){
    return this.http.post<any>("http://localhost:4200",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getOwner(){
    return this.http.get<any>("http://localhost:4200")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}


