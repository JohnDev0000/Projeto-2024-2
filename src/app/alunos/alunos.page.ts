import { Component, OnInit } from '@angular/core';
import {RedirectsService} from "../services/redirects.service";

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  constructor(private redirectService: RedirectsService) {
  }

  ngOnInit() {
  }

  goToHome() {
    this.redirectService.goToHome();
  }


}
