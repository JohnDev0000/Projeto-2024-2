import { Component, OnInit } from '@angular/core';
import {RedirectsService} from "../services/redirects.service";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  constructor(private redirectService: RedirectsService, private apiService: HttpService) {
  }

  ngOnInit() {
  }

  goToHome() {
    this.redirectService.goToHome();
  }


}
