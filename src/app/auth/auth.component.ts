import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus!: boolean;

  constructor(private authServices: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authServices.isAuth;
  }

  onSignIn() {
    this.authServices.signIn().then (
      () => {
        console.log('Connexion réussie !');
        this.authStatus = this.authServices.isAuth;
        this.router.navigate(['appareils']);
      }
    )
  }

  onSignOut() {
    this.authServices.signOut();
    this.authStatus = this.authServices.isAuth;
  }
}

