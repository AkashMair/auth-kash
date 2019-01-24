import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import {FirebaseAuthService } from "../services/firebase-auth.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = "";

  constructor(
    private auth: FirebaseAuthService, 
    private router: Router
  ) { }

  login(details: {email:string, password: string }) {

    this.auth.login(details.email, details.password)
    .then(() => {
      this.router.navigate(['/'])
      console.log("success")})
    .catch((error: Error)=>{ 
      this.errorMessage = error.message;
      });
  }

  ngOnInit() {
  }

}
