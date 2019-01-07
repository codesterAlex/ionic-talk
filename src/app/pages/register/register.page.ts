import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    credentialsForm2: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.credentialsForm2 = this.formBuilder.group({
            userEmail: ['', [Validators.required, Validators.email]],
            userPassword: ['', [Validators.required, Validators.minLength(6)]],
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            userName: ['', [Validators.required, Validators.minLength(3)]],
            language: ['', [Validators.required, Validators.minLength(3)]]
        });
    }
    register()
    {
        this.authService.register(this.credentialsForm2.value).subscribe(res => {
            console.log(this.credentialsForm2.value);
            this.authService.login(this.credentialsForm2.value).subscribe();
        });
    }
    openLogin(){
        this.router.navigate(['login'])
    }
}
