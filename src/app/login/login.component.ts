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
  pwd :new FormControl("", Validators.required)
}

);

  Verify(){
    console.log("form submitted");
    console.log(this.login.value);
    
  }
}
