import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Share } from './share.model'

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  url="https://9357ac32-3d1c-4170-8bd4-2c5e2b39e4af.mock.pstmn.io"
  constructor(private http:HttpClient) { }
  getAddrList():Observable<any[]>
  {
    return this.http.get<any>(this.url+'/searchAddress');
  } 
}

