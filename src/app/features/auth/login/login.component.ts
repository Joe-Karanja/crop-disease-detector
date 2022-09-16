import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        this.router.navigate(['/dashboard']);
    }
}