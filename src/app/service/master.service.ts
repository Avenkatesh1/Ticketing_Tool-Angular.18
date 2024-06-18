import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  //  apiUrl: string = "https://freeapi.miniprojectideas.com/api/TicketsNew/";
   
  // login(obj:any){
  //   return this.http.post(this.apiUrl + "Login", obj);
  // }
}
