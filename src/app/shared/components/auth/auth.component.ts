import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flatMap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signupForm!: FormGroup;
  loginForm!: FormGroup;
  alredyhaveAccount: boolean = false;
  constructor(
    private _authservice: AuthService,
    private _snackbar: SnackbarService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.creatsignupForm();
    this.creatloginForm();
  }

  creatsignupForm() {
    this.signupForm = new FormGroup({
      userRole: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  creatloginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSignup() {
    let registerObj = this.signupForm.value;
    console.log(registerObj);

    this._authservice.register(registerObj).subscribe({
      next: (res) => {
        this.alredyhaveAccount = true;
        // this._authservice.savetoken(res.token);
        // this._authservice.saveuserRole(res.userRole);
        this._snackbar.opensnackbar(res.message);
      },
      error: (err) => {
        console.log(err);
        this._snackbar.opensnackbar(err.error.message);
      },
    });

    // this._authservice.savetoken(res.token)
    // this._authservice.saveuserRole(res.userRole)
    // this._snackbar.opensnackbar()
    // });
  }

  
  onLogIn() {
    let LoginObj = this.loginForm.value;
    console.log(LoginObj);
    this._authservice.logIn(LoginObj).subscribe({
      next: (res) => {
        console.log(res);
        this._authservice.savetoken(res.token);
        this._route.navigate(['home']);
        this._authservice.saveuserRole(res.userRole);
        this._snackbar.opensnackbar(res.message);
      },
      error: (err) => {
        console.log(err);
        this._snackbar.opensnackbar(err.error.message);
      },
    });
  }
}
