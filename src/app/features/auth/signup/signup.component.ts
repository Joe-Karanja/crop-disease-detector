import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup, NgForm,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading=false;

  isLoginMode=true;
  constructor(private router:Router) { }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {
  }


  signup() {

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }
}
