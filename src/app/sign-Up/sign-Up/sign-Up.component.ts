import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-sign-Up',
  templateUrl: './sign-Up.component.html',
  styleUrls: ['./sign-Up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private _router: Router,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}
}
