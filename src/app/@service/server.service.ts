import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServer } from '../@URL/URL';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  // login
  onLogin(data) {
    return this.http.post(urlServer.ipServer + 'loginadmin', data)
  }
  onRegister(data) {
    return this.http.post(urlServer.ipServer + 'register', data)
  }// register

  // manageUser
  getDataUser() {
    return this.http.get(urlServer.ipServer + 'selectmember')
  }
  // manauser แก้
  getCustomer() {
    return this.http.get(urlServer.ipServer + 'selectcus')
  }
  addUser(data) {
    return this.http.post(urlServer.ipServer + 'addmember', data)
  }
  editUser(data) {
    return this.http.put(urlServer.ipServer + 'updatemember', data)
  }
  deleteUser(data) {
    return this.http.delete(urlServer.ipServer + 'deletemember/' + data)
  }
  // end manageUser
  // ManageRoom Resident
  getDataRoomResident() {
    return this.http.get(urlServer.ipServer + 'selectuseroom')
  }
  addRoomResident(data) {
    return this.http.post(urlServer.ipServer + 'addroom', data)
  }
  updateRoomResident(data) {
    return this.http.put(urlServer.ipServer + 'updateroom', data)
  }
  deleteRoom(data) {
    return this.http.delete(urlServer.ipServer + 'deleteroom/' + data)
  }
  // end ManageRoom Resident

  //Rent
  getRent() {
    return this.http.get(urlServer.ipServer + 'selectdabit')
  }
  //ENDRent

  //getRoom
  getRoom() {
    return this.http.get(urlServer.ipServer + 'selectroom')
  }
  //endroom
  //getBill
  getDebit(a, b, c) {
    return this.http.get(urlServer.ipServer + 'selectdabit/' + a + '/' + b + '/' + c)
  }
  //getQuestion
  getQuestion() {
    return this.http.get(urlServer.ipServer + 'selectcontact')
  }
  //Awnser
  Answer(data) {
    return this.http.put(urlServer.ipServer + 'updatecontact', data)
  }
  //countQuestion
  countQuestion() {
    return this.http.get(urlServer.ipServer + 'totalquestion')
  }
  //Ask
  Ask(data) {
    return this.http.post(urlServer.ipServer + 'addcontact', data)
  }
  //selectRoomforMember
  memberGetQuestion(data) {
    return this.http.get(urlServer.ipServer + 'selectquestionroom/' + data)
  }
  //deleteroomMember
  memberDeleteQuestion(data) {
    return this.http.delete(urlServer.ipServer + 'deletequestionmember/' + data)
  }
  //countReplyMember
  memberCountReply(data) {
    return this.http.get(urlServer.ipServer + 'selectreplymember/' + data)
  }
  //getmeter 
  getMeter(month, year) {
    return this.http.get(urlServer.ipServer + 'selectshmeter/' + month + "/" + year)
  }
  //getBook
  getBook() {
    return this.http.get(urlServer.ipServer + 'selectbook')
  }

  //getQuestionViewver
  viewerAskAndAnswer() {
    return this.http.get(urlServer.ipServer + 'selectquestionviewer')
  }
  //getFan N/A
  getFanna() {
    return this.http.get(urlServer.ipServer + 'selectfanna')
  }
  //getAir N/A
  getAirna() {
    return this.http.get(urlServer.ipServer + 'selectairna')
  }
  //getSuite N/A
  getSuitena() {
    return this.http.get(urlServer.ipServer + 'selectsuitena')
  }
  //meter page
  //uploadFile For Update Meter
  uploadfile(data) {
    return this.http.put(urlServer.ipServer + 'uploadmeter', data)
  }
  //Generate Table 
  GenerateTable(data) {
    return this.http.post(urlServer.ipServer + 'generatetable', data)
  }
  //edit meter
  updateMeter(data) {
    return this.http.put(urlServer.ipServer + 'updatemeter', data)
  }
  //end meter page
  //notifiy page
  updateBooktoRoom(data) {
    return this.http.put(urlServer.ipServer + 'updatebooktoroom', data)
  }
  //deleteNotifiy
  deleteBook(data) {
    return this.http.delete(urlServer.ipServer + 'deletebook/' + data)
  }
  //getCountBook
  getCountBook() {
    return this.http.get(urlServer.ipServer + 'selectcountbook')
  }

  //viewer room
  //addbook
  AddtableBook(data) {
    return this.http.post(urlServer.ipServer + 'addbook', data)
  }
  //end apge

  //receipt page
  getReceipt() {
    return this.http.get(urlServer.ipServer + 'selectreceipt')
  }
  //update Receipt
  updateReceipt(data) {
    return this.http.put(urlServer.ipServer + 'updatereceipt', data)
  }
}
