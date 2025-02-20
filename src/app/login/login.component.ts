import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(){

  }
login = new FormGroup({
  email: new FormControl("haythem" ,[Validators.required, Validators.minLength(4)]),
  pwd :new FormControl("", [Validators.required, Validators.minLength(8)]),
  tel : new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
  cin: new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
}

);

  Verify(){
    console.log("form submitted");
    console.log(this.login.value);
    
  }
}
