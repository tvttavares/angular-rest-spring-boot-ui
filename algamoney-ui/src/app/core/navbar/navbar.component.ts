import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    public auth: AuthService
  ) {}

  exibindoMenu = false;

  criarNovoAccessToken() {
    this.auth.obterNovoAccessToken();
  }
}
