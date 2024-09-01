import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:8000/api/register"
 private _loginUrl = "http://localhost:8000/api/login"

name:string="";

  constructor(private http: HttpClient, private Route: Router) { }


  getname(){
    return this.name;
  }

registerUser(User:any) {
  return this.http.post<any>(this._registerUrl, User)
}
loginUser(User:any){
  this.http.post<any>(this._loginUrl,User)
  .subscribe( (resData) =>{
    console.log(resData.name);
    this.name =  resData.name;
    if(resData) {
      this.Route.navigateByUrl('/steps');
    }
  },
  // res => console.log(res),
   err => console.log(err)
  );
}
}

