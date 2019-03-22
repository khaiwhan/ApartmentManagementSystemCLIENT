import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServer } from '../@URL/URL';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
  // login
  onLogin(data){
    return this.http.post(urlServer.ipServer + 'loginadmin',data)
  }
  onRegister(data){
    return this.http.post(urlServer.ipServer + 'register',data)
  }// register

  // manageUser
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
  // end manageUser
  // ManageRoom Resident
  getDataRoomResident(){
    return this.http.get(urlServer.ipServer + 'selectuseroom')
  }
  addRoomResident(data)
  {
    return this.http.post(urlServer.ipServer + 'addroom',data)
  }
  updateRoomResident(data){
    return this.http.put(urlServer.ipServer + 'updateroom',data)
  }
  deleteRoom(data){
    return this.http.delete(urlServer.ipServer + 'deleteroom/' + data)
  }
  // end ManageRoom Resident

  //Rent
  getRent(){
    return this.http.get(urlServer.ipServer + 'selectdabit')
  }

  //ENDRent
}
