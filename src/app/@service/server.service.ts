import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServer } from '../@URL/URL';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
  onLogin(data){
    return this.http.post(urlServer.ipServer + 'loginadmin',data)
  }
}
