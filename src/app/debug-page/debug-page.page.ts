import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-debug-page',
  templateUrl: './debug-page.page.html',
  styleUrls: ['./debug-page.page.scss'],
})
export class DebugPagePage implements OnInit {

  constructor(public apiService: HttpService, private router: Router) {
    // apiService.getNews().subscribe((results) => {
    //   console.log(results);
    // })
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/home']).then(r => console.log(r));
  }
}
