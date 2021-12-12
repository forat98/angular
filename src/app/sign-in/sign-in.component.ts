import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  hide: boolean = true; // for eye icon and text or password

  constructor(
    private _router: Router,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}
  LogIn() {
    this._router.navigate(['orders']);
  }
}
