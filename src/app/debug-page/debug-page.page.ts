import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-debug-page',
  templateUrl: './debug-page.page.html',
  styleUrls: ['./debug-page.page.scss'],
})
export class DebugPagePage implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/home']).then(r => console.log(r));
  }
}
