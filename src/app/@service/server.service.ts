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
  onRegister(data){
    return this.http.post(urlServer.ipServer + 'register',data)
  }
  getDataOverview(){
    return this.http.get(urlServer.ipServer + 'selectuseroom')
  }
  getDataUser(){
    return this.http.get(urlServer.ipServer + 'selectmember')
  }
  addUser(data){
    return this.http.post(urlServer.ipServer + 'addmember',data)
  }
  editUser(data){
    return this.http.put(urlServer.ipServer + 'updatemember',data)
  }
  deleteUser(data){
    return this.http.delete(urlServer.ipServer + 'deletemember/' + data)
  }
}
