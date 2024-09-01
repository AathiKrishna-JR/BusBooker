import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormControl,FormGroup,NgForm,NgModel } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData : any = {}


  constructor(private _auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }


 onsubmit(sign:NgForm){
    sign.resetForm();
    sign.valid;
    this.router.navigateByUrl('/login');
  }
  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
