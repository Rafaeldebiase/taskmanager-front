import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'tm-barraferramenta',
  templateUrl: './barraferramenta.component.html',
  styleUrls: ['./barraferramenta.component.scss']
})
export class BarraferramentaComponent implements OnInit {

  public flag = true;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
