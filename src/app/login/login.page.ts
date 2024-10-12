import { Component, OnInit } from '@angular/core';
import {RedirectsService} from "../services/redirects.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private redirect: RedirectsService) { }

  ngOnInit() {
  }

  goToHome() {
    this.redirect.goToHome();
  }

  goToRegister() {
    this.redirect.goToRegister();
  }
}
