import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RedirectsService {

  constructor(private router: Router) {

  }

  goToHome() {
    this.router.navigate(['/home']).then(r => console.log(r));
  }

  goToDebugPage() {
    this.router.navigate(['/debug-page']).then(r => console.log(r));
  }

  goToLogin() {
    this.router.navigate(['/login']).then(r => console.log(r));
  }

  goToAlunos() {
    this.router.navigate(['/alunos']).then(r => console.log(r));
  }

  goToRegister() {
    this.router.navigate(['/register']).then(r => console.log(r));
  }

}
